package api

import (
	"net/http"

	"github.com/go-openapi/runtime/middleware"
	"github.com/gorilla/mux"
	"github.com/newrelic/go-agent/v3/integrations/nrgorilla"
	"github.com/newrelic/go-agent/v3/newrelic"
	"github.com/odpf/cookies/go-app/api/handlers"
	"github.com/odpf/cookies/go-app/service"
	"github.com/purini-to/zapmw"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
)

// New initializes the service router
func New(container *service.Container, nr *newrelic.Application, logger *zap.Logger) *mux.Router {
	r := mux.NewRouter().StrictSlash(true)

	zapMiddlewares := []mux.MiddlewareFunc{
		zapmw.WithZap(logger),
		zapmw.Request(zapcore.InfoLevel, "request"),
		zapmw.Recoverer(zapcore.ErrorLevel, "recover", zapmw.RecovererDefault),
	}

	r.Use(nrgorilla.Middleware(nr))
	r.Use(zapMiddlewares...)

	// Route => handler
	r.Methods("GET").Path("/ping").Handler(handlers.Ping())

	r.Methods("GET").Path("/swagger.yaml").Handler(handlers.SwaggerFile())
	r.Methods("GET").Path("/documentation").Handler(middleware.SwaggerUI(middleware.SwaggerUIOpts{
		SpecURL: "/swagger.yaml",
		Path:    "documentation",
	}, r.NotFoundHandler))

	r.Methods("PUT").Path("/templates").Handler(handlers.UpsertTemplates(container.TemplatesService, logger))
	r.Methods("GET").Path("/templates").Handler(handlers.IndexTemplates(container.TemplatesService, logger))
	r.Methods("GET").Path("/templates/{name}").Handler(handlers.GetTemplates(container.TemplatesService, logger))
	r.Methods("DELETE").Path("/templates/{name}").Handler(handlers.DeleteTemplates(container.TemplatesService, logger))
	r.Methods("POST").Path("/templates/{name}/render").Handler(handlers.RenderTemplates(container.TemplatesService, logger))

	// Handle middlewares for NotFoundHandler and MethodNotAllowedHandler since Mux doesn't apply middlewares to them. Ref: https://github.com/gorilla/mux/issues/416
	_, r.NotFoundHandler = newrelic.WrapHandle(nr, "NotFoundHandler", applyMiddlewaresToHandler(zapMiddlewares, http.NotFoundHandler()))
	_, r.MethodNotAllowedHandler = newrelic.WrapHandle(nr, "MethodNotAllowedHandler", applyMiddlewaresToHandler(zapMiddlewares, http.HandlerFunc(func(rw http.ResponseWriter, r *http.Request) {
		rw.WriteHeader(http.StatusMethodNotAllowed)
	})))

	return r
}
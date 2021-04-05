package app

import (
	"fmt"
	"net/http"

	"github.com/odpf/cookies/go-app/api"
	"github.com/odpf/cookies/go-app/domain"
	"github.com/odpf/cookies/go-app/logger"
	"github.com/odpf/cookies/go-app/metric"
	"github.com/odpf/cookies/go-app/service"
	"github.com/odpf/cookies/go-app/store"
	"go.uber.org/zap"
)

// RunServer runs the application server
func RunServer(c *domain.Config) error {
	nr, err := metric.New(&c.NewRelic)
	if err != nil {
		return err
	}

	logger, err := logger.New(&c.Log)
	if err != nil {
		return err
	}

	store, err := store.New(&c.DB)
	if err != nil {
		return err
	}
	services, err := service.Init(store)
	if err != nil {
		return err
	}
	r := api.New(services, nr, logger)

	logger.Info("starting server", zap.Int("port", c.Port))
	return http.ListenAndServe(fmt.Sprintf(":%d", c.Port), r)
}

func RunMigrations(c *domain.Config) error {
	store, err := store.New(&c.DB)
	if err != nil {
		return err
	}

	services, err := service.Init(store)
	if err != nil {
		return err
	}

	services.MigrateAll(store)
	return nil
}

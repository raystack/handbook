package handlers

import (
	"net/http"
)

func SwaggerFile() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// http.FileServer(http.FS("../../swagger/swagger.yaml")).ServeHTTP(w, r)
		http.ServeFile(w, r, "./swagger/swagger.yaml")
		return
	}
}

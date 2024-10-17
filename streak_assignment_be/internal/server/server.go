package server

import (
	"net/http"
	"streak_assignment_be/internal/routes"
	"streak_assignment_be/pkg/logger"
)

func Start() error {
	r := routes.InitRouter()

	logger.Info("Starting the server on port 8080")
	return http.ListenAndServe(":8080", r)
}

package server

import (
	"net/http"
	"streak_assignment_be/internal/routes"
	"streak_assignment_be/pkg/logger"

	"github.com/rs/cors"
)

func Start() error {
	r := routes.InitRouter()

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"}, // Allow frontend to access API
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders:   []string{"Authorization", "Content-Type"},
		AllowCredentials: true,
	})

	handler := c.Handler(r)

	logger.Info("Starting the server on port 8080")
	return http.ListenAndServe(":8080", handler)
}

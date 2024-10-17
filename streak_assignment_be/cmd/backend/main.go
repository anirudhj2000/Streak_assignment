package main

import (
	"log"
	"streak_assignment_be/internal/server"
	"streak_assignment_be/pkg/logger"
)

func main() {
	// Initialize the logger
	logger.Init()

	// Start the server
	err := server.Start()
	if err != nil {
		log.Fatalf("Failed to start the server: %v", err)
	}
}

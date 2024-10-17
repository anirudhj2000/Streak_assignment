package routes

import (
	"streak_assignment_be/internal/handlers"

	"github.com/gorilla/mux"
)

func InitRouter() *mux.Router {
	r := mux.NewRouter()

	//  API routes
	r.HandleFunc("/api/find-path", handlers.FindPath).Methods("POST")
	return r
}

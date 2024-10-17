package handlers

import (
	"encoding/json"
	"net/http"
	"streak_assignment_be/internal/dfs"
	"streak_assignment_be/internal/models"
)

type PathRequest struct {
	Start models.Point `json:"start"`
	End   models.Point `json:"end"`
}

type PathResponse struct {
	Path [][]int `json:"path"`
}

func FindPath(w http.ResponseWriter, r *http.Request) {
	var req PathRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	path := dfs.DepthFirstSearch(req.Start, req.End)
	if path == nil {
		http.Error(w, "No path found", http.StatusNotFound)
		return
	}
	json.NewEncoder(w).Encode(PathResponse{Path: path})
}

package dfs

import (
	"streak_assignment_be/internal/models"
	"testing"
)

func TestFindPath(t *testing.T) {
	start := models.Point{X: 0, Y: 0}
	end := models.Point{X: 1, Y: 1}

	path := DepthFirstSearch(start, end)
	if len(path) == 0 {
		t.Fatalf("Expected a path, but got none")
	}
}

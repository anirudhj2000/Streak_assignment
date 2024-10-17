package dfs

import (
	"streak_assignment_be/internal/models"
)

func DepthFirstSearch(start, end models.Point) [][]int {
	visited := make(map[models.Point]bool)
	path := [][]int{}
	if dfsHelper(start, end, visited, &path) {
		return path
	}
	return nil
}

func dfsHelper(current, end models.Point, visited map[models.Point]bool, path *[][]int) bool {
	if current == end {
		*path = append(*path, []int{current.X, current.Y})
		return true
	}

	visited[current] = true
	*path = append(*path, []int{current.X, current.Y})

	directions := []models.Point{
		{0, 1}, {1, 0}, {0, -1}, {-1, 0}, // Right, Down, Left, Up
	}

	for _, d := range directions {
		next := models.Point{current.X + d.X, current.Y + d.Y}
		if next.X >= 0 && next.X < 20 && next.Y >= 0 && next.Y < 20 && !visited[next] {
			if dfsHelper(next, end, visited, path) {
				return true
			}
		}
	}

	*path = (*path)[:len(*path)-1] // backtrack
	return false
}

# STEAK FULLSTACK ASSIGNMENT

A simple full-stack application where users can interact with a 20x20 grid to select two tiles (start and end points), and the backend (written in Go) calculates the shortest path using Depth-First Search (DFS). The frontend (built with Next.js) displays the grid and highlights the shortest path.

## Project Overview

- **Frontend:** Next.js (React)
- **Backend:** Go (Golang) using Gorilla Mux for routing
- **Algorithm:** Depth-First Search (DFS) for pathfinding

---

## Setup Instructions

### 1. Backend Setup (Go)

#### Prerequisites

- Go 1.18 or later. Install from [here](https://golang.org/dl/).
- Nodejs

#### Steps

1. **Clone the repository** and navigate to the backend directory:

   ```bash
   git git@github.com:anirudhj2000/Streak_assignment.git
   cd streak_assignment

   ```

2. **Backend Setup** :

   ```
   cd /streak_assignment_be
   go get
   go run ./cmd/backend
   ```

3. **Frontend Setup** :
   ```
   npm i
   npm run dev
   ```

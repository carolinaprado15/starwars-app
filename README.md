## Getting Started

To run this application, you'll need Docker and Docker Compose installed on your machine. The project is configured to run via Docker Compose, which will set up all necessary services: the web frontend, the backend API server, MongoDB, and Redis.

### Steps to Run the Project

1. Run the following command to build and start all services:
  ```bash
  docker compose up --build
  ```

2. Access your browser on http://localhost:5173

3. Query stats are available on http://localhost:3000/api/v1/stats


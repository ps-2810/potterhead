# potterhead
Express backend that creates a simple REST API for managing tasks. This project includes endpoints for retrieving a list of tasks, getting a specific task by ID, creating a new task, updating an existing task, and deleting a task. The tasks are stored in-memory for simplicity. The server runs on http://localhost:3000, and you can test the API using tools like Postman.


# Project Description:
The project will have the following endpoints:

GET /tasks: Retrieve a list of tasks.
GET /tasks/:id: Retrieve a specific task by ID.
POST /tasks: Create a new task.
PUT /tasks/:id: Update an existing task by ID.
DELETE /tasks/:id: Delete a task by ID.
# Prerequisites:
Make sure you have Node.js and npm installed on your machine.

# Project Setup:
1. Create a new directory for your project and navigate to it in the terminal.
```
mkdir simple-task-api
cd simple-task-api
```
2. Initialize a new Node.js project.
```
npm init -y
```
3. Install the necessary dependencies (Express).
```
npm install express
```
4. Running the project
  a. Save the changes to index.js.
  b. Run the server
```
node index.js
```



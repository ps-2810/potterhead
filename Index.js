// index.js

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: true },
];

app.get('/tasks', (req, res) => res.json(tasks));
app.get('/tasks/:id', (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  task ? res.json(task) : res.status(404).json({ message: 'Task not found' });
});
app.post('/tasks', (req, res) => {
  const newTask = req.body;
  newTask.id = tasks.length + 1;
  tasks.push(newTask);
  res.status(201).json(newTask);
});
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body;
  tasks = tasks.map((t) => (t.id === taskId ? updatedTask : t));
  res.json(updatedTask);
});
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter((t) => t.id !== taskId);
  res.json({ message: 'Task deleted successfully' });
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

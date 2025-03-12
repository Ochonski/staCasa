const Task = require('./task.model');
let tasks = [];

exports.createTask = (req, res) => {
    const { title, description } = req.body;
    const id = tasks.length + 1;
    const newTask = new Task(id, title, description);
    tasks.push(newTask);
    res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const task = tasks.find(t => t.id == id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    if (title) task.title = title;
    if (description) task.description = description;
    if (status) task.status = status;
    res.json(task);
};

exports.deleteTask = (req, res) => {
    const { id } = req.params;
    tasks = tasks.filter(t => t.id != id);
    res.json({ message: 'Task deleted' });
};

exports.getTasks = (req, res) => {
    res.json(tasks);
};
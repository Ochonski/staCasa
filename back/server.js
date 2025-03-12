const express = require('express');
const app = express();
const taskRoutes = require('./tasks/task.routes');

app.use(express.json());
app.use('/tasks', taskRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
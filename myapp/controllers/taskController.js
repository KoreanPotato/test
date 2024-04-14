const taskService = require('../services/taskService');

class taskController {

 createTask (req, res) {
    const { userId, title, description, dueDate } = req.body;
    const task = taskService.createTaskForUser(userId, { title, description, dueDate });
    res.status(201).json(task);  
};
}

module.exports = new taskController()

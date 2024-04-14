const { body, validationResult } = require('express-validator');
const express = require('express');
const taskController = require('../controllers/taskController');
const router = express.Router();

const validateTaskData = [
    body('title').isString().notEmpty(),
    body('description').isString().notEmpty(),
    body('dueDate').isISO8601().toDate(),
  ];

router.post('/tasks/create', validateTaskData, taskController.createTask);
module.exports = router;


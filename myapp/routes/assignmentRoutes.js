const express = require('express');
const assignmentController = require('../controllers/AssignmentController');
const router = express.Router();

router.get('/assignments', assignmentController.getAllAssignments);
router.get('/assignment/:id', assignmentController.getAssignmentById);
router.post('/assignment', assignmentController.createAssignment);
router.put('/assignment/:id', assignmentController.updateAssignment);
router.delete('/assignment/:id', assignmentController.deleteAssignments);
module.exports = router;
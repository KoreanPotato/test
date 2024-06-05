const express = require('express');
const router = express.Router();
const assignmentsController = require('../controllers/AssignmentController');

router.get('/assignments', assignmentsController.getAllAssignments);
router.post('/assignments', assignmentsController.createAssignment);

module.exports = router;

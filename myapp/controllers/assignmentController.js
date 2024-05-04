const assignmentService = require('../services/AssignmentService'); 
const { Assignment } = require('../models/assignmentModel');
const mongoose = require('mongoose');



exports.getAllAssignments = async (req, res) => {
    try {
        const Assignments = await assignmentService.getAllUsers();
        res.json(Assignments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getAssignmentById = async (req, res) => {
    try {
        const Assignment = await assignmentService.getAssignmentById(req.params.id);
        res.json(Assignment);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};




exports.createAssignment = async (req, res) => {
    try {
      const assignment = new Assignment({
        title: req.body.title,
        description: req.body.description,
        user: req.body.user,
        dueDate: req.body.dueDate,
        status: req.body.status,
        estimatedTime: req.body.estimatedTime
      });
  
      const savedAssignment = await assignment.save();
      res.status(201).send(savedAssignment);
    } catch (error) {
      console.error('Error creating assignment:', error);
      if (error.code === 11000) {
        res.status(400).json({ message: 'A duplicate key error occurred', details: error.message });
      } else {
        res.status(500).json({ message: 'Failed to create assignment', details: error.message });
      }
    }
  };
  





exports.updateAssignment = async (req, res) => {
    try {
        const updatedAssignment = await assignmentService.updateAssignment(req.params.id, req.body);
        res.json(updatedAssignment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.deleteAssignments = async (req, res) => {
    try {
        const deletedAssignment = await assignmentService.deleteAssignments(req.params.id);
        if (!deletedAssignment) {
            res.status(404).json({ message: 'Задание не найден' });
        } else {
            res.status(204).json({ message: 'Задание удален' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

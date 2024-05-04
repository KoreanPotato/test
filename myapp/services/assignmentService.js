const Assignment = require('../models/assignmentModel');
const User = require('../models/userModel')


exports.getAllAssignments = async () => {
    try {
        return await Assignment.find({});
    } catch (error) {
        throw new Error('Error receiving all assignments: ' + error.message);
    }
};

exports.getAssignmentById = async (id) => {
    try {
        const assignment = await Assignment.findById(id);
        if (!assignment) {
            throw new Error('Assignment not found');
        }
        return assignment;
    } catch (error) {
        throw new Error('Error receiving assignment: ' + error.message);
    }
};


exports.updateAssignment = async (id, updateData) => {
    try {
        const updatedAssignment = await Assignment.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedAssignment) {
            throw new Error('Assignment not found');
        }
        return updatedAssignment;
    } catch (error) {
        throw new Error('Error updating assignment: ' + error.message);
    }
};

exports.deleteAssignments = async (id) => {
    try {
        const deletedAssignment = await Assignment.findByIdAndDelete(id);
        if (!deletedAssignment) {
            throw new Error('Assignment not found');
        }
        return deletedAssignment;
    } catch (error) {
        throw new Error('Error deleting assignment: ' + error.message);
    }
};

exports.createAssignment = async function(assignmentData) {
    const assignment = new Assignment(assignmentData);
    return await assignment.save();
};


  


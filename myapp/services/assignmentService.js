const Assignment = require('../models/assignmentModel');
const User = require('../models/userModel')

exports.getAllAssignments = async () => {
    try {
        return await Assignment.find({});
    } catch (error) {
        throw new Error('Ошибка при получении всех заданий: ' + error.message);
    }
};

exports.getAssignmentById = async (id) => {
    try {
        const assignment = await Assignment.findById(id);
        if (!assignment) {
            throw new Error('Задание не найдено');
        }
        return assignment;
    } catch (error) {
        throw new Error('Ошибка при получении задания: ' + error.message);
    }
};

// exports.createAssignment = async (assignmentData) => {
//     try {
//         const newAssignment = new Assignment(assignmentData);
//         await newAssignment.save();
//         return newAssignment;
//     } catch (error) {
//         throw new Error('Ошибка при создании пользователя: ' + error.message);
//     }
// };

exports.updateAssignment = async (id, updateData) => {
    try {
        const updatedAssignment = await Assignment.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedAssignment) {
            throw new Error('Задание не найдено');
        }
        return updatedAssignment;
    } catch (error) {
        throw new Error('Ошибка при обновлении задания: ' + error.message);
    }
};

exports.deleteAssignments = async (id) => {
    try {
        const deletedAssignment = await Assignment.findByIdAndDelete(id);
        if (!deletedAssignment) {
            throw new Error('задание не найдено');
        }
        return deletedAssignment;
    } catch (error) {
        throw new Error('Ошибка при удалении задания: ' + error.message);
    }
};

exports.createAssignment = async (userData, assignmentData) => {
    try {
      const user = await User.findById(userData._id);
      if (!user) {
        throw new Error('Пользователь не найден');
      }
  
      const newAssignment = new Assignment({
        ...assignmentData,
        user: userData._id, 
      });
  
      await newAssignment.save();
  
      return newAssignment;
    } catch (error) {
      throw new Error('Ошибка при создании задания: ' + error.message);
    }
  };
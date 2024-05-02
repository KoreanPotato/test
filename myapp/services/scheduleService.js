const Schedule = require('../models/scheduleModel');
const User = require('../models/userModel')

exports.getAllSchedule = async () => {
    try {
        return await Schedule.find({});
    } catch (error) {
        throw new Error('Ошибка при получении расписания: ' + error.message);
    }
};

exports.getScheduleById = async (id) => {
    try {
        const schedule = await Schedule.findById(id);
        if (!schedule) {
            throw new Error('Расписание не найдено');
        }
        return schedule;
    } catch (error) {
        throw new Error('Ошибка при получении расписания: ' + error.message);
    }
};


exports.updateSchedule = async (id, updateData) => {
    try {
        const updatedSchedule = await Schedule.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedSchedule) {
            throw new Error('Расписание не найдено');
        }
        return updatedSchedule;
    } catch (error) {
        throw new Error('Ошибка при обновлении расписания: ' + error.message);
    }
};

exports.deleteSchedule = async (id) => {
    try {
        const deletedSchedule = await Schedule.findByIdAndDelete(id);
        if (!deletedSchedule) { 
            throw new Error('Расписание не найдено');
        }
        return deletedSchedule;
    } catch (error) {
        throw new Error('Ошибка при удалении расписания: ' + error.message);
    }
};

exports.createSchedule = async (req, res) => {
    try {
        const newSchedule = await scheduleService.createSchedule(req.user._id, req.body);  // Передаем ID пользователя и данные расписания
        res.status(201).json(newSchedule);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
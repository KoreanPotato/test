const scheduleService = require('../services/scheduleService'); 
const Schedule = require('../models/scheduleModel')

exports.getAllSchedule = async (req, res) => {
    try {
        const Schedule = await scheduleService.getAllSchedule();
        res.json(Schedule);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getScheduleById = async (req, res) => {
    try {
        const Schedule = await scheduleService.getScheduleById(req.params.id);
        res.json(Schedule);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


exports.createSchedule = async (req, res) => {
    try {
        const newSchedule = await scheduleService.createSchedule(req.body);
        res.status(201).json(newSchedule);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.updateSchedule = async (req, res) => {
    try {
        const updatedSchedule = await scheduleService.updateSchedule(req.params.id, req.body);
        res.json(updatedSchedule);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.deleteSchedule = async (req, res) => {
    try {
        const deletedSchedule = await scheduleService.deleteSchedule(req.params.id);
        if (!deletedSchedule) {
            res.status(404).json({ message: 'Schedule not found' });
        } else {
            res.status(204).json({ message: 'Schedule deleted' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
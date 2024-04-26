const express = require('express');
const scheduleController = require('../controllers/scheduleController');
const router = express.Router();

router.get('/schedule', scheduleController.getAllSchedule);
router.get('/schedule/:id', scheduleController.getScheduleById);
router.post('/schedule', scheduleController.createSchedule);
router.put('/schedule/:id', scheduleController.updateSchedule);
router.delete('/schedule/:id', scheduleController.deleteSchedule);
module.exports = router;
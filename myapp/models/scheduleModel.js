const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { assignmentSchema } = require('../models/assignmentModel');
const scheduleSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    assignments: [assignmentSchema], 
    reminders: {
        type: String,
        required: false
    }
}, { timestamps: true });

const Schedule = mongoose.model('Schedule', scheduleSchema);
module.exports = Schedule;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { assignmentSchema } = require('./assignmentModel');
const scheduleSchema = new Schema({
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
}, { timestamps: true });

const Schedule = mongoose.model('Schedule', scheduleSchema);
module.exports = Schedule;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    dueDate: {
        type: Date,
        required: false
    },
    status: {
        type: Boolean,
        required: false
    },
    estimatedTime: {
        type: Number,
        required: false
    },
}, { timestamps: true });

const Assignment = mongoose.model('Assignment', assignmentSchema);
module.exports = { Assignment, assignmentSchema }; // Если вам нужно использовать и модель, и схему

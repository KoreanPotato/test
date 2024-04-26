const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    id: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true
    },
    projects: {
        type: String,
        required: false
    },
    assignments: {
        type: String,
        required: false
    },
    reminders: {
        type: String,
        required: false
    }
}, {timestamps: true}
)
const User = mongoose.model('User', postSchema);

module.exports = User;
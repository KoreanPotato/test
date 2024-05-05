const userService = require('../services/userService'); // Предполагается, что это ваш файл сервиса
const user = require('../models/userModel')
// Получение всех пользователей
exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCurrentUser = async (req, res) => {
    try {
        console.log("User ID from token:", req.user._id);
        const user = await userService.getUserById(req.user._id);
        res.status(200).json(user);
    } catch (error) {
        console.error("Error in getting current user:", error);
        res.status(500).send(error.message);
    }
};



exports.getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userService.getUserById(userId);
        res.status(200).json(user);
    } catch (error) {
        if (error.message === 'User not found') {
            res.status(404).send('User not found');
        } else {
            console.error('Error getting user:', error);
            res.status(500).send('Internal Server Error');
        }
    }
};


exports.createUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
              message: 'Ошибка: Пользователь с таким username или email уже существует.'
            });
        }
        res.status(500).json({ message: error.message });
    }
};


exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await userService.deleteUser(req.params.id);
        if (!deletedUser) {
            res.status(404).json({ message: 'Пользователь не найден' });
        } else {
            res.status(204).json({ message: 'Пользователь удален' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

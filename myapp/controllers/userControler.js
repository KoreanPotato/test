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

// Получение одного пользователя по ID
exports.getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
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

const User = require('../models/userModel');

exports.getAllUsers = async () => {
    try {
        return await User.find({});
    } catch (error) {
        throw new Error('Ошибка при получении всех пользователей: ' + error.message);
    }
};


exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Пользователь не найден' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Ошибка при получении пользователя: ' + error.message });
    }
};




exports.createUser = async (userData) => {
    try {
        const newUser = new User(userData);
        await newUser.save();
        return newUser;
    } catch (error) {
        throw new Error('Ошибка при создании пользователя: ' + error.message);
    }
};

exports.updateUser = async (id, updateData) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedUser) {
            throw new Error('Пользователь не найден');
        }
        return updatedUser;
    } catch (error) {
        throw new Error('Ошибка при обновлении пользователя: ' + error.message);
    }
};

exports.deleteUser = async (id) => {
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            throw new Error('Пользователь не найден');
        }
        return deletedUser;
    } catch (error) {
        throw new Error('Ошибка при удалении пользователя: ' + error.message);
    }
};




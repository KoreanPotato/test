const User = require('../models/userModel')


exports.getUserById = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error('Error getting user by _id: ' + error.message);
    }
};

// Создание нового пользователя
exports.createUser = async (userData) => {
    try {
        const newUser = new User(userData);
        await newUser.save(); // Сохраняем нового пользователя в базу данных
        console.log("New user created:", newUser); // Логируем созданного пользователя
        return newUser; // Возвращаем созданного пользователя
    } catch (error) {
        throw new Error('Error creating user: ' + error.message); // Бросаем исключение, если происходит ошибка
    }
};

// Обновление пользователя
exports.updateUser = async (id, updateData) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedUser) {
            throw new Error('User not found');
        }
        return updatedUser;
    } catch (error) {
        throw new Error('Error updating user: ' + error.message);
    }
};

// Удаление пользователя
exports.deleteUser = async (id) => {
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            throw new Error('User not found');
        }
        return deletedUser;
    } catch (error) {
        throw new Error('Error deleting user: ' + error.message);
    }
};
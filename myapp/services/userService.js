const User = require('../models/userModel'); // Предполагается, что у вас есть модель User

// Получение всех пользователей
exports.getAllUsers = async () => {
    try {
        return await User.find({});
    } catch (error) {
        // Передайте ошибку выше по стеку вызовов
        throw new Error('Ошибка при получении всех пользователей: ' + error.message);
    }
};

// Получение одного пользователя по ID
exports.getUserById = async (id) => {
    try {
        const user = await User.findById(id);
        if (!user) {
            throw new Error('Пользователь не найден');
        }
        return user;
    } catch (error) {
        throw new Error('Ошибка при получении пользователя: ' + error.message);
    }
};

// Создание нового пользователя
exports.createUser = async (userData) => {
    try {
        const newUser = new User(userData);
        await newUser.save();
        return newUser;
    } catch (error) {
        throw new Error('Ошибка при создании пользователя: ' + error.message);
    }
};

// Обновление пользователя по ID
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

// Удаление пользователя по ID
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




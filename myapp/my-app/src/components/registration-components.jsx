import React, { useState } from 'react';
import axios from '../axios';
import '../styles/register.css';
import { useNavigate } from 'react-router-dom'; // Для переадресации

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Хук для управления историей браузера

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault(); 
  
    try {
      const response = await axios.post('/users', formData);
      console.log('Пользователь зарегистрирован:', response.data);
  
      // Сохранение токена, если он возвращается сервером
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
  
      // Сохранение userId, предполагаем что сервер возвращает _id пользователя
      if (response.data._id) {
        localStorage.setItem('userId', response.data._id);
      }
  
      // Переадресация на страницу dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Ошибка при регистрации:', error.response ? error.response.data : error);
    }
  };

  return (
    <div className="register-container">
      <h2>Sign in</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={onChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={onChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

import React, { useState } from 'react';
import axios from '../axios'; 
import '../styles/register.css'
const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

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
    } catch (error) {
      console.error('Ошибка при регистрации:', error.response ? error.response.data : error);
    }
  };

  return (
    <div className="register-container">
      <h2>Sing in</h2>
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

        <label htmlFor="password">password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={onChange}
          required
        />

        <button type="submit">register</button>
      </form>
    </div>
  );
};

export default Register;

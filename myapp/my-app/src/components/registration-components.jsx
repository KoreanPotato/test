import React, { useState } from 'react';
import axios from '../axios';
import { useNavigate, Link } from 'react-router-dom'; // Добавлено: Link
import '../styles/register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

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
      navigate('/dashboard');
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('registration failed:', error.response ? error.response.data : error);
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
      <div style={{ marginTop: '20px' }}>
        <Link to="/login">Already have an account? Log in</Link>
      </div>
    </div>
  );
};

export default Register;

import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const CreateAssignment = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: false,
    estimatedTime: 0,
    user: '' 
  });

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId && userId.length === 24) { 
      setFormData(currentFormData => ({ ...currentFormData, user: userId }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.user || formData.user.length !== 24) {
      alert('Invalid user ID');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3001/api/assignment', formData);
      console.log('Assignment created:', response.data);
      alert('Assignment successfully created!');
    } catch (error) {
      console.error('Error creating assignment:', error.response?.data?.message || error.message);
      alert('Failed to create assignment.');
    }
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Assignment</h2>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Due Date:
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
        />
      </label>
      <label>
        Status:
        <input
          type="checkbox"
          name="status"
          checked={formData.status}
          onChange={handleChange}
        />
      </label>
      <label>
        Estimated Time (hours):
        <input
          type="number"
          name="estimatedTime"
          value={formData.estimatedTime}
          onChange={handleChange}
        />
      </label>
      
      <button type="submit">Create Assignment</button>
    </form>
  );
};

export default CreateAssignment;

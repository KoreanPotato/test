import React, { useState } from 'react';
import '../styles/assignment.css'; // Убедитесь, что стили подключены


const CreateAssignment = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, description, dueDate, startTime, endTime };
    console.log('Submitting task:', task); // Логирование для проверки данных
    fetch('http://localhost:3001/api/assignments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
    .then(response => response.json())
    .then(newTask => {
      setTitle('');
      setDescription('');
      setDueDate('');
      setStartTime('');
      setEndTime('');
      console.log('Task created:', newTask);
    })
    .catch(error => console.error('Error saving task:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add assignment</h2>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
      </label>
      <label>
        Date:
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
      </label>
      <label>
        Start time:
        <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
      </label>
      <label>
        Finish time:
        <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
      </label>
      <button type="submit">Create Assignment</button>
    </form>
  );
};

export default CreateAssignment;

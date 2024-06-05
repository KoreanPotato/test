import React, { useEffect, useState } from 'react';
import '../styles/schedule.css';

const SchedulePage = () => {
  const [assignments, setAssignments] = useState({});

  useEffect(() => {
    fetch('http://localhost:3001/api/assignments')
      .then(response => response.json())
      .then(data => {
        setAssignments(data);
        console.log('Fetched assignments:', data); // Логирование для проверки данных
      })
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  const renderAssignmentsForDay = (day) => {
    return (
      <div className="day-column" key={day}>
        <h3>{day}</h3>
        {assignments[day]?.map((task) => (
          <div 
            key={task.id} 
            className="task" 
            style={{ 
              top: `${getTimeOffset(task.startTime)}px`, 
              height: `${getTimeDuration(task.startTime, task.endTime)}px` 
            }}
          >
            <div className="task-title">{task.title}</div>
            <div className="task-details">
              <p>Описание: {task.description}</p>
              <p>Время: {task.startTime} - {task.endTime}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div id="schedule">
      <div className="time-column">
        {Array.from({ length: 24 }).map((_, index) => (
          <div key={index} className="time-slot">{`${index}:00`}</div>
        ))}
      </div>
      {daysOfWeek.map(day => renderAssignmentsForDay(day))}
    </div>
  );
};

const getTimeOffset = (time) => {
  if (!time) return 0;
  const [hours, minutes] = time.split(':').map(Number);
  return (hours * 60 + minutes); // Offset in minutes
};

const getTimeDuration = (start, end) => {
  if (!start || !end) return 60; // Default duration in minutes
  const [startHours, startMinutes] = start.split(':').map(Number);
  const [endHours, endMinutes] = end.split(':').map(Number);
  return ((endHours * 60 + endMinutes) - (startHours * 60 + startMinutes)); // Duration in minutes
};

export default SchedulePage;

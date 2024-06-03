import React from 'react';
import '../styles/schedule.css';

const SchedulePage = () => {
  const schedule = {
    Mon: ['university', 'university', 'Assignment'],
    Tue: ['university', 'Meeting', 'Assignment'],
    Wed: ['university', 'Meeting', 'Assignment', 'Meeting', 'deadline!'],
    Thu: ['university', 'Project', 'university', 'deadline!'],
    Fri: ['university', 'Project', 'university', 'Meeting', 'Assignment'],
    Sat: ['university', 'university', 'Meeting', 'Project', 'deadline!'],
    Sun: ['Meeting', 'Assignment']
  };

  return (
    <div className="schedule-container">
      <h1>Weekly Schedule</h1>
      <div className="week">
        {Object.keys(schedule).map(day => (
          <div key={day} className="day">
            <h2>{day}</h2>
            {schedule[day].map((item, index) => (
              <div key={index} className={`task ${item === 'deadline!' ? 'deadline' : ''}`}>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="notes">
        <h2>Notes</h2>
        <textarea placeholder="Your notes..."></textarea>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default SchedulePage;

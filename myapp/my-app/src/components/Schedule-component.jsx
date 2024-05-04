import React, { useState } from 'react';
import instance from '../axios';

const ScheduleComponent = () => {
    const [schedule, setSchedule] = useState({ assignments: [] });

    const handleAddAssignment = () => {
        setSchedule(prev => ({ ...prev, assignments: [...prev.assignments, { title: '', description: '' }] }));
    };

    const handleSubmit = async () => {
        try {
            const response = await instance.createSchedule(schedule);
            console.log('Schedule created', response);
        } catch (error) {
            console.error('Error creating schedule', error);
        }
    };

    return (
        <div>
            <h1>Create Your Schedule</h1>
            {schedule.assignments.map((assignment, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={assignment.title}
                        onChange={(e) => {
                            const newAssignments = [...schedule.assignments];
                            newAssignments[index].title = e.target.value;
                            setSchedule({ ...schedule, assignments: newAssignments });
                        }}
                    />
                    <textarea
                        placeholder="Description"
                        value={assignment.description}
                        onChange={(e) => {
                            const newAssignments = [...schedule.assignments];
                            newAssignments[index].description = e.target.value;
                            setSchedule({ ...schedule, assignments: newAssignments });
                        }}
                    />
                </div>
            ))}
            <button onClick={handleAddAssignment}>Add Assignment</button>
            <button onClick={handleSubmit}>Submit Schedule</button>
        </div>
    );
};

export default ScheduleComponent;

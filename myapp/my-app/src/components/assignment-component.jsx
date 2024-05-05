import React, { useState } from 'react';
import '../styles/assignment.css'; 


const CreateAssignment = () => {
  const [showDateModal, setShowDateModal] = useState(false);
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Assignment Submitted!');
  };

  return (
    <div className="assignment-container">
      
      <div className="function-area">
        <button onClick={() => setShowDateModal(true)}>Add Date</button>
        <button onClick={() => setShowActivityModal(true)}>Add Title</button>
        <button onClick={handleSubmit}>Create Assignment</button>
      </div>

      {showDateModal && (
        <div className="modal">
          <label>Date:
            <input type="date" name="date" value={formData.date} onChange={handleChange} />
          </label>
          <label>Time (hours):
            <input type="number" name="time" value={formData.time} onChange={handleChange} />
          </label>
          <button onClick={() => setShowDateModal(false)}>Close</button>
        </div>
      )}

      {showActivityModal && (
        <div className="modal">
          <label>Title:
            <input type="text" name="title" value={formData.title} onChange={handleChange} />
          </label>
          <label>Description:
            <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
          </label>
          <button onClick={() => setShowActivityModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CreateAssignment;

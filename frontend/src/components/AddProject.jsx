import React, { useState } from 'react';
import axios from 'axios';

function AddProject() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      description,
      start_date: startDate,
      end_date: endDate,
    };
    const response = await axios.post('/api/projects/', data);
    console.log(response.data);
    // Clear form
    setName('');
    setDescription('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <div>
      <h1>Add Project</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="start-date">Start Date</label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label htmlFor="end-date">End Date</label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default AddProject;

import React, { useState } from 'react';
import axios from 'axios';

function ProjectForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    start_date: '',
    end_date: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/projects/', formData);
      setFormData({
        name: '',
        description: '',
        start_date: '',
        end_date: ''
      });
      setFormErrors({});
      alert('Project created successfully!');
    } catch (error) {
      setFormErrors(error.response.data);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {formErrors.name && (
          <span className="text-danger">{formErrors.name}</span>
        )}
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        {formErrors.description && (
          <span className="text-danger">{formErrors.description}</span>
        )}
      </div>

      <div>
        <label htmlFor="start_date">Start Date</label>
        <input
          type="date"
          id="start_date"
          name="start_date"
          value={formData.start_date}
          onChange={handleChange}
        />
        {formErrors.start_date && (
          <span className="text-danger">{formErrors.start_date}</span>
        )}
      </div>

      <div>
        <label htmlFor="end_date">End Date</label>
        <input
          type="date"
          id="end_date"
          name="end_date"
          value={formData.end_date}
          onChange={handleChange}
        />
        {formErrors.end_date && (
          <span className="text-danger">{formErrors.end_date}</span>
        )}
      </div>

      <button type="submit">Create Project</button>
    </form>
  );
}

export default ProjectForm;

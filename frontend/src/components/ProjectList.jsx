import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get('/api/projects/');
      setProjects(response.data);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Project List</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>Start Date: {project.start_date}</p>
          <p>End Date: {project.end_date}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;

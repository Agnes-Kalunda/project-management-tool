import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProjectDetail(props) {
  const [project, setProject] = useState({});
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const projectId = props.match.params.id;

    const fetchProject = async () => {
      const response = await axios.get(`/api/projects/${projectId}/`);
      setProject(response.data);
    };
    fetchProject();

    const fetchTasks = async () => {
      const response = await axios.get(`/api/projects/${projectId}/tasks/`);
      setTasks(response.data);
    };
    fetchTasks();
  }, [props.match.params.id]);

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p>Start Date: {project.start_date}</p>
      <p>End Date: {project.end_date}</p>

      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <a href={`/tasks/${task.id}`}>{task.title}</a>
            <p>{task.description}</p>
            <p>Assigned to: {task.assigned_to.username}</p>
            <p>Start Date: {task.start_date}</p>
            <p>End Date: {task.end_date}</p>
            <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectDetail;

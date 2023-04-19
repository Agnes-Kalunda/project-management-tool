import React from 'react';

function TaskList(props) {
  const { tasks } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Assigned To</th>
          <th>Created By</th>
          <th>Project</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.assigned_to.username}</td>
            <td>{task.created_by.username}</td>
            <td>{task.project.name}</td>
            <td>{task.start_date}</td>
            <td>{task.end_date}</td>
            <td>{task.completed ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;

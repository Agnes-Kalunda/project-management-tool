import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function TaskForm(props) {
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
  const { users, projects, task, onSubmit } = props;
  const [assignedTo, setAssignedTo] = useState(null);
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (task) {
      setValue('title', task.title);
      setValue('description', task.description);
      setAssignedTo(task.assigned_to.id);
      setProject(task.project.id);
      setValue('start_date', task.start_date);
      setValue('end_date', task.end_date);
      setValue('completed', task.completed);
    }
  }, [task]);

  const handleAssignedToChange = (event) => {
    const value = parseInt(event.target.value);
    setAssignedTo(value);
  }

  const handleProjectChange = (event) => {
    const value = parseInt(event.target.value);
    setProject(value);
  }

  const onSubmitForm = (data) => {
    const newTask = {
      title: data.title,
      description: data.description,
      assigned_to: assignedTo,
      project: project,
      start_date: data.start_date,
      end_date: data.end_date,
      completed: data.completed,
    };

    onSubmit(newTask);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <label>
        Title
        <input type="text" {...register('title', { required: true })} />
        {errors.title && <span>This field is required</span>}
      </label>
      <label>
        Description
        <textarea {...register('description')} />
      </label>
      <label>
        Assigned To
        <select onChange={handleAssignedToChange} value={assignedTo || ''}>
          <option value="">-- Select a user --</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.username}</option>
          ))}
        </select>
        {errors.assigned_to && <span>This field is required</span>}
      </label>
      <label>
        Project
        <select onChange={handleProjectChange} value={project || ''}>
          <option value="">-- Select a project --</option>
          {projects.map(project => (
            <option key={project.id} value={project.id}>{project.name}</option>
          ))}
        </select>
        {errors.project && <span>This field is required</span>}
      </label>
      <label>
        Start Date
        <input type="date" {...register('start_date', { required: true })} />
        {errors.start_date && <span>This field is required</span>}
      </label>
      <label>
        End Date
        <input type="date" {...register('end_date', { required: true })} />
        {errors.end_date && <span>This field is required</span>}
      </label>
      <label>
        Completed
        <input type="checkbox" {...register('completed')} />
      </label>
      <button type="submit">{task ? 'Update' : 'Create'}</button>
    </form>
  );
}

export default TaskForm;

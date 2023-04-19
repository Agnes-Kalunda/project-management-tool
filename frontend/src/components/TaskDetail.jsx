import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskDetail = (props) => {
  const [task, setTask] = useState({});
  const [commentContent, setCommentContent] = useState('');

  useEffect(() => {
    axios.get(`/api/tasks/${props.taskId}/`)
      .then(response => {
        setTask(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.taskId]);

  const handleCommentContentChange = (event) => {
    setCommentContent(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const comment = { content: commentContent };
    axios.post(`/api/tasks/${props.taskId}/comments/`, comment)
      .then(response => {
        setTask({
          ...task,
          comments: [...task.comments, response.data],
        });
        setCommentContent('');
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Start Date: {task.start_date}</p>
      <p>End Date: {task.end_date}</p>
      <p>Completed: {task.completed ? 'Yes' : 'No'}</p>

      <h3>Comments</h3>
      {task.comments && task.comments.map(comment => (
        <div key={comment.id}>
          <p>{comment.content}</p>
          <p>Author: {comment.author.username}</p>
          <p>Created At: {comment.created_at}</p>
        </div>
      ))}

      <h3>Add Comment</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="comment-content">Content:</label>
          <textarea id="comment-content" name="comment-content" value={commentContent} onChange={handleCommentContentChange}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TaskDetail;

import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = (props) => {
  const [commentContent, setCommentContent] = useState('');

  const handleCommentContentChange = (event) => {
    setCommentContent(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const comment = { content: commentContent };
    axios.post(`/api/tasks/${props.taskId}/comments/`, comment)
      .then(response => {
        props.onCommentAdded(response.data);
        setCommentContent('');
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="comment-content">Content:</label>
        <textarea id="comment-content" name="comment-content" value={commentContent} onChange={handleCommentContentChange}></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;

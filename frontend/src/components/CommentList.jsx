import React from 'react';

const CommentList = (props) => {
  const renderComments = () => {
    return props.comments.map(comment => {
      return (
        <div key={comment.id}>
          <p>{comment.content}</p>
          <p>By {comment.author.username} on {new Date(comment.created_at).toLocaleString()}</p>
        </div>
      );
    });
  }

  return (
    <div>
      <h3>Comments:</h3>
      {renderComments()}
    </div>
  );
}

export default CommentList;

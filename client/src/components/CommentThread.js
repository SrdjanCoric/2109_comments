import Comment from "./Comment";

const CommentThread = ({ comment, onMoreReplies }) => {
  const handleMoreReplies = (e) => {
    e.preventDefault();
    onMoreReplies(comment.id);
  };
  return (
    <div className="parent-comment">
      <Comment
        author={comment.author}
        body={comment.body}
        postedAt={comment.postedAt}
      />
      <div data-testid="replies" className="replies">
        {comment.replies.map((comment) => (
          <Comment
            key={comment.id}
            author={comment.author}
            body={comment.body}
            postedAt={comment.postedAt}
          />
        ))}
        {comment.replies.length === comment.replies_count ? null : (
          <a href="#/" className="show_more" onClick={handleMoreReplies}>
            Show More Replies ({comment.replies_count - 1})
          </a>
        )}
      </div>
    </div>
  );
};

export default CommentThread;
//{...comment}

// id={comment.id} author={comment.author} body={body}...

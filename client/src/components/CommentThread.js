import Comment from "./Comment";

const CommentThread = ({ comment }) => {
  return (
    <div className="parent-comment">
      <Comment
        author={comment.author}
        body={comment.body}
        postedAt={comment.postedAt}
      />
      <div className="replies">
        {comment.replies.map((comment) => (
          <Comment
            key={comment.id}
            author={comment.author}
            body={comment.body}
            postedAt={comment.postedAt}
          />
        ))}
        <a href="#" className="show_more">
          Show More Replies ({comment.replies_count - 1})
        </a>
      </div>
    </div>
  );
};

export default CommentThread;
//{...comment}

// id={comment.id} author={comment.author} body={body}...

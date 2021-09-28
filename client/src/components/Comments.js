import CommentThread from "./CommentThread";

const Comments = ({ comments, onMoreReplies }) => {
  return (
    <div className="comments">
      <h2>Comments ({comments.length})</h2>
      {comments.map((comment) => {
        return (
          <CommentThread
            key={comment.id}
            comment={comment}
            onMoreReplies={onMoreReplies}
          />
        );
      })}
    </div>
  );
};

export default Comments;

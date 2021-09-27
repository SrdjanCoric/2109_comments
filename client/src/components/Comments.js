import CommentThread from "./CommentThread";

const Comments = ({ comments }) => {
  return (
    <div className="comments">
      <h2>Comments ({comments.length})</h2>
      {comments.map((comment) => {
        return <CommentThread key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default Comments;

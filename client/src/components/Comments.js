import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import CommentThread from "./CommentThread";
import { commentsReceived } from "../actions/commentsActions";

const Comments = ({ onMoreReplies }) => {
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get("/api/comments");
      const data = response.data;
      //action creator (function that returns an object)
      dispatch(commentsReceived(data));
    };
    fetchComments();
  }, [dispatch]);

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

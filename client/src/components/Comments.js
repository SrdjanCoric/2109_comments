import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { commentsReceived } from "../actions/commentsActions";
import CommentThread from "./CommentThread";

const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get("/api/comments");
      const data = response.data;
      dispatch(commentsReceived(data));
    };
    fetchComments();
  }, []);

  return (
    <div className="comments">
      <h2>Comments (2)</h2>
      {comments.map((comment) => {
        return <CommentThread key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default Comments;

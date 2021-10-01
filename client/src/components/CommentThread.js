import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Comment from "./Comment";
import { repliesReceived } from "../actions/repliesActions";

const CommentThread = ({ comment }) => {
  const replies = useSelector((state) =>
    state.replies.filter((reply) => reply.comment_id === comment.id)
  );

  const dispatch = useDispatch();

  const handleShowMoreReplies = (e) => {
    e.preventDefault();
    axios
      .get(`/api/comment_replies?comment_id=${comment.id}`)
      .then((response) => response.data)
      .then((data) => {
        dispatch(repliesReceived(data));
      });
  };
  // const handleShowMoreReplies = (e) => {
  //   e.preventDefault();
  //   onShowMoreReplies(comment.id);
  // };
  return (
    <div className="parent-comment">
      <Comment {...comment} />
      <div data-testid="replies" className="replies">
        {replies.map((reply) => {
          return <Comment key={reply.id} {...reply} />;
        })}
        {replies.length === comment.replies_count ? null : (
          <a href="#" className="show_more" onClick={handleShowMoreReplies}>
            Show More Replies ({comment.replies_count - 1})
          </a>
        )}
      </div>
    </div>
  );
};

export default CommentThread;

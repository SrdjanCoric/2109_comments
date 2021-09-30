import Comment from "./Comment";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { repliesReceived } from "../actions/repliesActions";
const CommentThread = ({ comment }) => {
  const dispatch = useDispatch();

  const replies = useSelector((state) =>
    state.replies.filter((reply) => reply.comment_id === comment.id)
  );

  const handleMoreReplies = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      `/api/comment_replies?comment_id=${comment.id}`
    );
    const serverReplies = response.data;
    dispatch(repliesReceived(serverReplies));
  };
  return (
    <div className="parent-comment">
      <Comment
        author={comment.author}
        body={comment.body}
        postedAt={comment.postedAt}
      />
      <div data-testid="replies" className="replies">
        {replies.map((comment) => (
          <Comment
            key={comment.id}
            author={comment.author}
            body={comment.body}
            postedAt={comment.postedAt}
          />
        ))}
        {replies.length === comment.replies_count ? null : (
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

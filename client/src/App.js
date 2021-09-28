import { useState, useEffect } from "react";
import axios from "axios";
import Comments from "./components/Comments";
import AddCommentForm from "./components/AddCommentForm";

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get("/api/comments");
      const data = response.data;
      setComments(data);
    };
    fetchComments();
  }, []);

  const handleMoreReplies = async (commentId) => {
    const response = await axios.get(
      `/api/comment_replies?comment_id=${commentId}`
    );
    const replies = response.data;

    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          return Object.assign({}, comment, {
            replies: comment.replies.concat(replies),
          });
        } else {
          return comment;
        }
      })
    );
  };

  const handleSubmit = async (newComment, callback) => {
    try {
      const response = await axios.post("/api/comments", { ...newComment });
      const comm = response.data;
      setComments(comments.concat(comm));
      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Comments comments={comments} onMoreReplies={handleMoreReplies} />
      <AddCommentForm onSubmit={handleSubmit} />
    </div>
  );
}

// Comments
//   CommentThread
//      Comment ( Reply )
// AddCommentForm

export default App;

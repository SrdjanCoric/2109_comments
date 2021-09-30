import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { commentCreated } from "../actions/commentsActions";

const AddCommentForm = () => {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = { author, body };
    try {
      const response = await axios.post("/api/comments", { ...newComment });
      const comm = response.data;
      dispatch(commentCreated(comm));
      resetInputs();
    } catch (e) {
      console.error(e);
    }
  };

  const resetInputs = () => {
    setAuthor("");
    setBody("");
  };
  return (
    <form aria-label="add comment form" action="" onSubmit={handleSubmit}>
      <h2>Post a Comment</h2>
      <div className="input-group">
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          type="text"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="body">Your Comment</label>
        <textarea
          id="body"
          name="body"
          value={body}
          cols="30"
          rows="10"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddCommentForm;

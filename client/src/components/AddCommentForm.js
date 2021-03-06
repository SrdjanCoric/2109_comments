import React, { useState } from "react";
import axios from "axios";
import { commentCreated } from "../actions/commentsActions";
import { useDispatch } from "react-redux";

const AddCommentForm = () => {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = { author, body };
    const response = await axios.post("/api/comments", { ...newComment });
    const data = response.data;
    dispatch(commentCreated(data));
    resetInputs();
  };

  const resetInputs = () => {
    setAuthor("");
    setBody("");
  };
  return (
    <form aria-label="Add a comment" onSubmit={handleSubmit}>
      <h2>Post a Comment</h2>
      <div className="input-group">
        <label htmlFor="author">Your Name</label>
        <input
          id="author"
          type="text"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="body">Your Comment</label>
        <textarea
          aria-label="Your Comment"
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

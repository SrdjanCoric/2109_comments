import { useState, useEffect } from "react";

import Comments from "./components/Comments";
import AddCommentForm from "./components/AddCommentForm";
import data from "./lib/comments";

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(data);
  }, []);

  return (
    <div>
      <Comments comments={comments} />
      <AddCommentForm />
    </div>
  );
}

// Comments
//   CommentThread
//      Comment ( Reply )
// AddCommentForm

export default App;

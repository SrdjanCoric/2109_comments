import { useState } from "react";
import axios from "axios";
import Comments from "./components/Comments";
import AddCommentForm from "./components/AddCommentForm";

function App() {
  return (
    <div>
      <Comments />
      <AddCommentForm />
    </div>
  );
}

// Comments
//   CommentThread
//      Comment ( Reply )
// AddCommentForm

export default App;

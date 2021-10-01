import React from "react";

import AddCommentForm from "./AddCommentForm";
import Comments from "./Comments";

function App() {
  return (
    <div>
      <Comments />
      <AddCommentForm />
    </div>
  );
}

export default App;

/*
store {
  comments: [],
  replies: [],
  loading: false
}

action -> an object, it needs to have TYPE property and this property needs to be a string "COMMENTS_RECEIVED", "COMMENT_ADDED"

const action = {type: "COMMENT_ADDED", payload: {comment, loading: true}}

action.payload.comment

const action = {type: "COMMENT_ADDED", comment}

action.comment

action creator-> just a function that returns this object from above

const actionCreator = () => {
  return action
}

actionCreator();

const commentAddedSuccess = () => {
  return {type: "COMMENT_ADDED", payload: {comment}}
}

reducers -> functions pure

they take as arguments:
    - previous state
    - action

they return new state either changed or the same one

Each reducer handles one part of the state

const comments =  (state = [], action) => {
  switch(action.type) {
    case "COMMENT_ADDED":
    case "COMMENTS_RECEIVED":
    default:
      return state
  }

}

const replies = (state = [], action) => {
  switch(action.type) {
    case "REPLIES_RECEIVED":
  }
  return state
}

const loading  = (state=false, action) => {
  case "COMMENTS_RECEIVED"
    return false
  return state
}

// dispatch sending an action to the store and calling ALL reducers

{type: "COMMENTS_RECEIVED", payload: {comments}}

dispatch(action)
*/

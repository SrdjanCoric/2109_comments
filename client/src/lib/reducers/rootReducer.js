import comments from "./comments";
import replies from "./replies";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ comments, replies });

// const rootReducer = (state = {}, action) => {
//   return {
//     comments: comments(state.comments, action),
//     replies: replies(state.replies, action),
//   };
// };

export default rootReducer;

// state -> object

// state = {
//comments: [],
//replies: []
//}

// comment = { replies }

// normalizing -> comments contain comments without replies
// replies contain only replies array and you connect replies with a specific comment with commentID

// user
// blog posts
// comments
//replies

/// user
// blog posts userId
// comments blogPostId
// replies commentId

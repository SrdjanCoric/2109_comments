import { combineReducers } from "redux";
import { comments } from "./comments";
import { replies } from "./replies";

// export const rootReducer = (state = {}, action) => {
//   return {
//     comments: comments(state.comments, action),
//     replies: replies(state.replies, action),
//   };
// };

export const rootReducer = combineReducers({ comments, replies });

// [comment1, comment2]

// comments without replies
// replies

// users
// blog posts
// comments
// replies

// usersWithoutBlogPosts
// blogPostsWithoutComments
// commentsWithoutReplies
// replies

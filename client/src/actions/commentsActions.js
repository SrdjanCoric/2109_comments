import * as types from "../constants/ActionTypes";

export const commentsReceived = (newComments) => {
  return { type: types.COMMENTS_RECEIVED, payload: { comments: newComments } };
};

export const commentCreated = (newComment) => {
  return { type: types.COMMENT_CREATED, payload: { newComment } };
};

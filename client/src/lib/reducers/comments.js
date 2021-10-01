export const comments = (state = [], action) => {
  switch (action.type) {
    case "COMMENTS_RECEIVED": {
      const commentsWithoutReplies = action.payload.comments.reduce(
        (acc, comment) => {
          const { replies, ...commentWithoutReplies } = comment;
          return acc.concat(commentWithoutReplies);
        },
        []
      );
      return commentsWithoutReplies;
    }
    case "COMMENT_CREATED": {
      return state.concat(action.payload.newComment);
    }
    default:
      return state;
  }
};

export const replies = (state = [], action) => {
  switch (action.type) {
    case "COMMENTS_RECEIVED": {
      const replies = action.payload.comments.reduce((acc, comment) => {
        const { replies } = comment;
        return acc.concat(replies);
      }, []);
      return replies;
    }
    case "REPLIES_RECEIVED": {
      //state
      // action.payload.replies
      return state.concat(action.payload.replies);
    }
    default:
      return state;
  }
};

const replies = (state = [], action) => {
  switch (action.type) {
    case "COMMENTS_RECEIVED": {
      // removed all replies from all comments
      const allReplies = action.payload.comments.reduce((acc, reply) => {
        const { replies } = reply;
        return acc.concat(replies);
      }, []);
      return allReplies;
    }
    case "REPLIES_RECEIVED": {
      return state.concat(action.payload.replies);
    }
    default: {
      return state;
    }
  }
};

export default replies;

/*
id:1

replies: [
  {id: 2, commentId: 1}, {id:3, commentId: 1}
]
*/

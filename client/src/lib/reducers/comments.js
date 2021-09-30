const comments = (state = [], action) => {
  switch (action.type) {
    case "COMMENTS_RECEIVED": {
      // remove all replies from all comments (return comments without replies)
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
    default: {
      return state;
    }
  }
};

export default comments;

/*
id: 1
author: ""
body: ""
replies_count: 2
postedAt: 31231231

*/

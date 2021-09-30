import * as types from "../constants/ActionTypes";

export const repliesReceived = (replies) => {
  return {
    type: types.REPLIES_RECEIVED,
    payload: { replies },
  };
};

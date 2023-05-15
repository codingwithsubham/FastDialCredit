import {
  CREATE_FEED,
  DELETE_FEED,
  GET_FEED,
  GET_FEEDS,
} from "../actions/types";

const initialState = {
  feed: null,
  feeds: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_FEED:
      return {
        ...state,
        feeds: [payload, ...state.feeds],
      };
    case DELETE_FEED:
      return {
        ...state,
        feeds: state.feeds.filter((x) => x._id !== payload),
      };
    case GET_FEED:
      return {
        ...state,
        feed: payload,
      };
    case GET_FEEDS:
      return {
        ...state,
        feeds: payload,
      };
    default:
      return state;
  }
}

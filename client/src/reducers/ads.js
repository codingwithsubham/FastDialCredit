import { CREATE_ADS, GET_ADS } from "../actions/types";

const initialState = {
  ads: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ADS:
      return {
        ...state,
        ads: [ payload, ...state.ads],
      };
    case GET_ADS:
      return {
        ...state,
        ads: payload,
      };
    default:
      return state;
  }
}

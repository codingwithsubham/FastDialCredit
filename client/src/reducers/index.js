import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import layout from "./layout";
import media from "./media";
import feed from "./feed";
import ads from "./ads";

export default combineReducers({
  alert,
  auth,
  layout,
  ads,
  feed,
  media,
});

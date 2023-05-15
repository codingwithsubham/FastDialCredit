import axios from "axios";
import { setAlert } from "./alert";
import { CREATE_FEED, DELETE_FEED, GET_FEED, GET_FEEDS } from "./types";
import { API_CONFIG } from "../common/constants";

//create feed
export const createFeed = (body) => async (dispatch) => {
  try {
    const res = await axios.post("/api/feed/create", body, API_CONFIG);
    dispatch({
      type: CREATE_FEED,
      payload: res.data,
    });
    dispatch(setAlert("Requirement Posted Successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Requirement can not be posted", "danger"));
  }
};

//get feed by current user
export const getFeedsByCurrentUser = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/feed/current-user", API_CONFIG);
    dispatch({
      type: GET_FEEDS,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert("Can not fetch Feeds", "danger"));
  }
};

//get all feeds
export const getFeeds = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/feed", API_CONFIG);
    dispatch({
      type: GET_FEEDS,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert("Can not fetch Feeds", "danger"));
  }
};

//get a feeds by id
export const getFeedById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/feed/${id}`, API_CONFIG);
    dispatch({
      type: GET_FEED,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert("Can not fetch Feeds", "danger"));
  }
};

//get a feeds by id
export const deleteFeedById = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/feed/${id}`, API_CONFIG);
    dispatch({
      type: DELETE_FEED,
      payload: id,
    });
    dispatch(setAlert("Deleted Successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Can not delete Feeds", "danger"));
  }
};

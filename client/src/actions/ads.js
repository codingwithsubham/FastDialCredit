import axios from "axios";
import { setAlert } from "./alert";
import { CREATE_ADS, GET_ADS } from "./types";
import { API_CONFIG } from "../common/constants";

//create feed
export const createAd = (body) => async (dispatch) => {
  try {
    const res = await axios.post("/api/ads/create", body, API_CONFIG);
    dispatch({
      type: CREATE_ADS,
      payload: res.data,
    });
    dispatch(setAlert("Ad Posted Successfully", "success"));
  } catch (err) {
    dispatch(setAlert("Ad can not be posted", "danger"));
  }
};

//get all feeds
export const getAds = () => async (dispatch) => {
    try {
      const res = await axios.get("/api/ads", API_CONFIG);
      dispatch({
        type: GET_ADS,
        payload: res.data,
      });
    } catch (err) {
      dispatch(setAlert("Can not fetch Ads", "danger"));
    }
  };

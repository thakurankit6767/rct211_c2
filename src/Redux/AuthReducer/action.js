//Create ActionCreator functions here
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";
import axios from "axios";

export const getLoginAPI = (params) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post(`https://reqres.in/api/login`, params)
    .then((r) => dispatch({ type: LOGIN_SUCCESS, payload: r.data }))
    .catch((err) => dispatch({ type: LOGIN_FAILURE, payload: err }));
};

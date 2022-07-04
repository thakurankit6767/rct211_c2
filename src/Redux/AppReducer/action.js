//Create ActionCreator functions here
import {
    GET_SHOES_DATA_REQUEST,
    GET_SHOES_DATA_SUCCESS,
    GET_SHOES_DATA_FAILURE,
   
  } from "./actionTypes";
  import axios from "axios";



  export const getShoes = (params) => (dispatch) => {
    dispatch({ type: GET_SHOES_DATA_REQUEST });
    return axios
      .get(`http://localhost:8080/shoes`, params)
      .then((r) => dispatch({ type: GET_SHOES_DATA_SUCCESS, payload: r.data }))
      .catch((err) => dispatch({ type: GET_SHOES_DATA_FAILURE, payload: err }));
  };
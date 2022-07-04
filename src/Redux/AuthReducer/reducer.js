import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  
} from "./actionTypes";



const initialState = {
  data: {
    isAuth: false,
    token: "",
  },
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,{ type, payload }) => {
 
  switch (type) {
    case  LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case LOGIN_SUCCESS: {
      return { ...state, isLoading: false, token: payload, isAuth: true };
    }
    case LOGIN_FAILURE: {
      return { ...state, isError: true, isAuth: false, token: "" };
    }
   
 
 
  return state;
}
}

import {
  GET_SHOES_DATA_REQUEST,
  GET_SHOES_DATA_SUCCESS,
  GET_SHOES_DATA_FAILURE,
} from "./actionTypes";


const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SHOES_DATA_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case GET_SHOES_DATA_SUCCESS: {
      return {
        ...state,
        shoes: payload,
        isLoading: false,
        isError: false,
      };
    }
    case GET_SHOES_DATA_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
  }

  return state;
};

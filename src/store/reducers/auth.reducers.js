import {
  LOGIN,
} from "../actions/action.types";

const initialState = {
  user: null,
  isAuthenticated: false,
  token: "",
  isLoading: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        user: action.user,
        isAuthenticated: true,
        token: action.token
      };
    default:
      return state;
  }
};

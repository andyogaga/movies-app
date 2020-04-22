import {
  LOGIN, LOGOUT,
} from "../actions/action.types";

const initialState = {
  user: null,
  isAuthenticated: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        user: action.user,
        isAuthenticated: true
      };
      case LOGOUT:
        return initialState;
    default:
      return state;
  }
};

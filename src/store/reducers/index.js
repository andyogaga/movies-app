import { combineReducers } from "redux";
import { authReducer } from "./auth.reducers";
import favouritesReducer from './favourites.reducers'
import feedbackReducer from './feedback.reducers'
import moviesReducer from './movies.reducers';

export default combineReducers({
  auth: authReducer,
  favourites: favouritesReducer,
  movies: moviesReducer,
  feedback: feedbackReducer
});

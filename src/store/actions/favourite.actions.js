import {
  GET_FAVOURITES,
  VIEW_FAVOURITE,
  REMOVE_FAVOURITE,
} from "./action.types";
import { callApi } from "../../utils";
import { showFeedback } from "./feedbackActions";

export const getFavourites = (id) => async (dispatch) => {
  try {
    const favourites = await callApi(`/movie/favorites/${id}`, null, "GET");
    if (Array.isArray(favourites)) {
      dispatch({
        type: GET_FAVOURITES,
        payload: favourites,
      });
    }
  } catch (error) {
    //Handle Error
    dispatch(showFeedback("Error Connecting, try again"));
  }
};

export const getFavouriteDetail = (id) => async (dispatch) => {
  try {
    const movie = await callApi(`/movie/favorite/detail/${id}`, null, "GET");
    if (movie) {
      dispatch({
        type: VIEW_FAVOURITE,
        payload: movie,
      });
    }
  } catch (error) {
    dispatch(
      showFeedback(
        error &&
          error.response &&
          error.response.data &&
          error.response.data.message
          ? error.response.data.message
          : "Error in connection"
      )
    );
  }
};

export const addFavourite = ({ movieId, userId }, cb = () => {}) => async (
  dispatch
) => {
  callApi(`/movie/favorite/add`, { movieId, userId }, "POST")
    .then(() => {
      cb("Added");
    })
    .catch((error) => {
      dispatch(
        showFeedback(
          error &&
            error.response &&
            error.response.data &&
            error.response.data.message
            ? error.response.data.message
            : "Error in connection"
        )
      );
      cb();
    });
};

export const removeFavourite = ({ movieId, userId }, cb = () => {}) => async (
  dispatch
) => {
  callApi(`/movie/favorite/remove`, { movieId, userId }, "PUT")
    .then(() => {
      cb("Removed");
    })
    .catch((error) => {
      dispatch(
        showFeedback(
          error &&
            error.response &&
            error.response.data &&
            error.response.data.message
            ? error.response.data.message
            : "Error in connection"
        )
      );
      cb();
    });
};

import { GET_FAVOURITES, VIEW_FAVOURITE } from "./action.types";
import { callApi } from "../../utils";
import { toast } from "react-toastify";

export const getFavourites = (id, setLoading) => async (dispatch) => {
  try {
    const favourites = await callApi(`/movie/favorites/${id}`, null, "GET");
    if (Array.isArray(favourites)) {
      dispatch({
        type: GET_FAVOURITES,
        payload: favourites,
      });
    }
  } catch (error) {
    toast(
      error && error.response && error.response.data && error.response.data
        ? error.response.data
        : "Error in connection"
    );
  } finally {
    setLoading(false);
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
    toast(
      error && error.response && error.response.data && error.response.data
        ? error.response.data
        : "Error in connection"
    );
  }
};

export const addFavourite = ({ movieId, userId }, cb = () => {}) => async () => {
  callApi(`/movie/favorite/add`, { movieId, userId }, "POST")
    .then(() => {
      cb("Added");
    })
    .catch((error) => {
      toast(
        error && error.response && error.response.data && error.response.data
          ? error.response.data
          : "Error in connection"
      );
      cb();
    });
};

export const removeFavourite = ({ movieId, userId }, cb = () => {}) => async () => {
  callApi(`/movie/favorite/remove`, { movieId, userId }, "PUT")
    .then(() => {
      cb("Removed");
    })
    .catch((error) => {
      toast(
        error && error.response && error.response.data && error.response.data
          ? error.response.data
          : "Error in connection"
      );
      cb();
    });
};

import {GET_MOVIES } from './action.types';
import {callApi} from '../../utils';
import { toast } from "react-toastify";

export const getMovies = (page, setLoading) => async dispatch => {
  try {
    const movies = await callApi(`/movie/list?page=${page}`, null, 'GET');
    if (movies && Array.isArray(movies.content)) {
      dispatch({
        type: GET_MOVIES,
        payload: movies.content,
      });
    }
  } catch (error) {
    toast(
      error && error.response && error.response.data && error.response.data
        ? error.response.data
        : "Error in connection"
    );
  } finally {
    setLoading(false)
  }
};

export const getMovieDetail = (
  id, cb = () => {}
) => async () => {
  try {
    const movie = await callApi(`/movie/detail/${id}`, null, 'GET');
    if (movie) {
      cb(movie)
    }
  } catch (error) {
    toast(
      error && error.response && error.response.data && error.response.data
        ? error.response.data
        : "Error in connection"
    );
    cb(null)
  }
};

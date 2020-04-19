import {GET_MOVIES, VIEW_MOVIE } from './action.types';
import {callApi} from '../../utils';
import {showFeedback} from './feedbackActions';

export const getMovies = page => async dispatch => {
  try {
    const movies = await callApi(`/movie/list?page=${page}`, null, 'GET');
    if (movies && movies.length) {
      dispatch({
        type: GET_MOVIES,
        payload: movies,
      });
    }
  } catch (error) {
    //Handle Error
    dispatch(showFeedback('Error Connecting, try again'));
  }
};

export const getMovieDetail = (
  id
) => async dispatch => {
  try {
    const movie = await callApi(`/movie/detail/${id}`, null, 'GET');
    if (movie) {
      dispatch({
        type: VIEW_MOVIE,
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
          : 'Error in connection',
      ),
    );
  }
};
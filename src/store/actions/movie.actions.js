import {GET_MOVIES, VIEW_MOVIE } from './action.types';
import {callApi} from '../../utils';
import {showFeedback} from './feedbackActions';

export const getMovies = page => async dispatch => {
  try {
    const movies = await callApi(`/movie/list?page=${page}`, null, 'GET');
    if (movies && Array.isArray(movies.content)) {
      dispatch({
        type: GET_MOVIES,
        payload: movies.content,
      });
    }
  } catch (error) {
    //Handle Error
    dispatch(showFeedback('Error Connecting, try again'));
  }
};

export const getMovieDetail = (
  id, cb = () => {}
) => async dispatch => {
  try {
    const movie = await callApi(`/movie/detail/${id}`, null, 'GET');
    if (movie) {
      cb(movie)
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
    cb(null)
  }
};

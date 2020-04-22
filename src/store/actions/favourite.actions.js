import {GET_FAVOURITES, VIEW_FAVOURITE, ADD_FAVOURITE, REMOVE_FAVOURITE } from './action.types';
import {callApi} from '../../utils';
import {showFeedback} from './feedbackActions';

export const getFavourites = id => async dispatch => {
  try {
    const favourites = await callApi(`/favourites/${id}`, null, 'GET');
    if (Array.isArray(favourites)) {
      dispatch({
        type: GET_FAVOURITES,
        payload: favourites,
      });
    }
  } catch (error) {
    //Handle Error
    dispatch(showFeedback('Error Connecting, try again'));
  }
};

export const getFavouriteDetail = (
  id
) => async dispatch => {
  try {
    const movie = await callApi(`/favourite/detail/${id}`, null, 'GET');
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
          : 'Error in connection',
      ),
    );
  }
};

export const addFavourite = ({movieId, userId}) => async dispatch => {
  try {
    const movie = await callApi(`/favourite/add`, {movieId, userId}, 'POST');
    if (movie) {
      dispatch({
        type: ADD_FAVOURITE,
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
}

export const removeFavourite = ({movieId, userId}) => async dispatch => {
  try {
    const movie = await callApi(`/favourite/remove`, {movieId, userId}, 'PATCH');
    if (movie) {
      dispatch({
        type: REMOVE_FAVOURITE,
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
}

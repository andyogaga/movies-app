import {CLEAR_FEEDBACK, SHOW_FEEDBACK} from './action.types';
import { callApi } from '../../utils';

export const showFeedback = feedback => {
  const id = Date.now();
  return dispatch => {
    dispatch({
      type: SHOW_FEEDBACK,
      message: typeof feedback === 'object' ? feedback.message : feedback,
      id,
    });
    setTimeout(() => {
      dispatch(clearFeedback(id));
    }, 1500);
  };
};

export const clearFeedback = id => ({
  type: CLEAR_FEEDBACK,
  id,
});

export const saveToken = async (userToken, token) => {
  try {
    await callApi('/save-user-firebase-token', {token}, 'POST', userToken);
  } catch (error) {
    console.log(error)
  }
};
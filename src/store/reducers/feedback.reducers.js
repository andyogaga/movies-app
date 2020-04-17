import {
  SHOW_FEEDBACK,
  CLEAR_FEEDBACK,
} from '../actions/actionTypes';

const init = {
  feedbacks: [],
};

// Feedback Reducer
const feedback = (state = init, action) => {
  switch (action.type) {
    case SHOW_FEEDBACK:
      return {
        ...state,
        feedbacks: init.feedbacks.concat({ message: action.message, id: action.id }),
      };

    case CLEAR_FEEDBACK:
      return {
        ...state,
        feedbacks: state.feedbacks.filter(error => error.id !== action.id),
      };

    default:
      return state;
  }
};

export default feedback

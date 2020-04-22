import {
  GET_MOVIES,
  VIEW_MOVIE,
} from '../actions/action.types';

const init = {
  movies: [],
  activeMovie: null
};

// Movie Reducer
const movies = (state = init, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };

    case VIEW_MOVIE:
      return {
        ...state,
        activeMovie: action.payload,
      };

    default:
      return state;
  }
};

export default movies

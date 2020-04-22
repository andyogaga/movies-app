import {
  GET_FAVOURITES,
  ADD_FAVOURITE,
} from '../actions/action.types';

const init = {
  favourites: [],
  activeFavourites: null
};

// Favourites Reducer
const favourites = (state = init, action) => {
  switch (action.type) {
    case GET_FAVOURITES:
      return {
        ...state,
        favourites: action.payload,
      };

    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: init.favourites.concat(action.payload),
      };

    default:
      return state;
  }
};

export default favourites

import React from "react";
import { Grid } from "semantic-ui-react";
import MovieCard from "../../components/movie-card.component";
import { removeFavourite } from "../../store/actions/favourite.actions";
import { useDispatch } from "react-redux";
import { arrayOf, shape } from "prop-types";

const Favourites = ({ favourites, user, history }) => {
  const dispatch = useDispatch();

  const onRemoveFavourite = (id, cb) => {
    dispatch(removeFavourite({ movieId: id, userId: user.id }, cb));
  };

  return (
    <Grid columns={4} doubling>
      {Array.isArray(favourites) &&
        favourites.map((favourite) => {
          return (
            <Grid.Column key={favourite.id}>
              <MovieCard
                movie={favourite}
                isFavourite
                removeFavourite={onRemoveFavourite}
                user={user}
                history={history}
              />
            </Grid.Column>
          );
        })}
    </Grid>
  );
};

Favourites.propTypes = {
  favourites: arrayOf(shape({})),
  user: shape({}),
  history: shape({})
}
export default Favourites;

import React from "react";
import { Grid } from "semantic-ui-react";
import MovieCard from "../../components/movie-card.component";
import {removeFavourite } from '../../store/actions/favourite.actions'
import { useDispatch } from "react-redux";

const Favourites = ({ movies }) => {
  const dispatch = useDispatch()

  const onRemoveFavourite = id => {
    dispatch(removeFavourite(id))
  }
  
  return (
    <Grid columns={4}>
      {Array.isArray(movies) &&
        movies.map((movie) => {
          return (
            <Grid.Column>
              <MovieCard movie={movie} isFavourite removeFavourite={onRemoveFavourite} />
            </Grid.Column>
          );
        })}
    </Grid>
  );
};

export default Favourites;

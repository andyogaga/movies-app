import React from "react";
import { Grid } from "semantic-ui-react";
import MovieCard from "../../components/movie-card.component";
import { arrayOf, shape, bool } from "prop-types";

const Home = ({ movies, isAuthenticated, history }) => {
  return (
    <Grid columns={4} doubling>
      {Array.isArray(movies) &&
        movies.map((movie) => {
          return <Grid.Column key={movie.id}>
            <MovieCard movie={movie} isAuthenticated={isAuthenticated} history={history} />
          </Grid.Column>;
        })}
    </Grid>
  );
};

Home.propTypes = {
  movies: arrayOf(shape({})),
  isAuthenticated: bool,
  history: shape({})
}

export default Home;

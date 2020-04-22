import React from "react";
import { Grid } from "semantic-ui-react";
import MovieCard from "../../components/movie-card.component";
import { arrayOf, shape } from "prop-types";

const Home = ({ movies }) => {
  return (
    <Grid columns={4} doubling>
      {Array.isArray(movies) &&
        movies.map((movie) => {
          return <Grid.Column key={movie.id}>
            <MovieCard movie={movie} />
          </Grid.Column>;
        })}
    </Grid>
  );
};

Home.propTypes = {
  movies: arrayOf(shape({}))
}

export default Home;

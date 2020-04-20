import React from "react";
import { Grid } from "semantic-ui-react";
import MovieCard from "../../components/movie-card.component";

const Home = ({ movies }) => {
  return (
    <Grid columns={4}>
      {Array.isArray(movies) &&
        movies.map((movie) => {
          return <Grid.Column>
            <MovieCard movie={movie} />
          </Grid.Column>;
        })}
    </Grid>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { getMovies } from "../../store/actions/movie.actions";
import Home from "./home";
import { Container } from "semantic-ui-react";

const HomeContainer = ({ isAuthenticated, movies }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getMovies(page));
  }, []);
  return (
    <Container>
      <Home movies={movies} />
    </Container>
  );
};

const mapState = ({ auth, movies }) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    movies: movies.movies,
  };
};

export default connect(mapState)(HomeContainer);

import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { getMovies } from "../../store/actions/movie.actions";
import Home from "./home";
import { Container, Header } from "semantic-ui-react";
import { WelcomeBoard } from "../../common/styles";
import { bool, arrayOf, shape } from "prop-types";

const HomeContainer = ({ isAuthenticated, movies }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getMovies(page));
  }, []);
  return (
    <>
      <WelcomeBoard >
        <Header as="h1" color="blue" >Movies</Header>
      </WelcomeBoard>
      <Container>
        <Home movies={movies} />
      </Container>
    </>
  );
};

const mapState = ({ auth, movies }) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    movies: movies.movies,
  };
};

HomeContainer.propTypes = {
  isAuthenticated: bool,
  movies: arrayOf(shape({}))
}

export default connect(mapState)(HomeContainer);

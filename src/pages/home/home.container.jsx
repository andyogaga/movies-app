import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { getMovies } from "../../store/actions/movie.actions";
import Home from "./home";
import { Container, Header } from "semantic-ui-react";
import { WelcomeBoard } from "../../common/styles";
import { bool, arrayOf, shape } from "prop-types";
import PageLoader from "../../components/loader.component";

const HomeContainer = ({ isAuthenticated, movies, history }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true)
    dispatch(getMovies(page, setLoading));
  }, [page]);
  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <>
          <WelcomeBoard>
            <Header as="h1" color="blue">
              Movies
            </Header>
          </WelcomeBoard>
          <Container textAlign="center" style={{ marginBottom: "6rem" }}>
            <Home
              movies={movies}
              isAuthenticated={isAuthenticated}
              setPage={setPage}
              history={history}
              
            />
          </Container>
        </>
      )}
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
  movies: arrayOf(shape({})),
  history: shape({}),
};

export default connect(mapState)(HomeContainer);

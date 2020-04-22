import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { getMovieDetail } from "../../store/actions/movie.actions";

import { Container, Header, Image } from "semantic-ui-react";
import { WelcomeBoard } from "../../common/styles";
import PageLoader from "../../components/loader.component";
import SingleMovieDetails from "./single-movie";
import { bool, shape } from "prop-types";
import { number } from "yup";

const SingleMovie = (props) => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, history } = props;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const id =
    props.match && props.match.params && props.match.params.id
      ? props.match.params.id
      : 0;

  useEffect(() => {
    dispatch(
      getMovieDetail(id, (movie) => {
        if (movie) {
          setMovie(movie);
          setLoading(false);
        }
      })
    );
  }, []);

  return (
    <>
      <WelcomeBoard height="30rem">
        {movie && movie.backdropPath ? (
          <Image
            src={movie.backdropPath}
            style={{ height: "100%", backgroundPosition: "center" }}
            fluid
          />
        ) : (
          <Header as="h1" color="blue">
            Movie
          </Header>
        )}
      </WelcomeBoard>
      <Container>
        {loading ? (
          <PageLoader />
        ) : (
          <SingleMovieDetails
            movie={movie}
            isAuthenticated={isAuthenticated}
            user={user}
            history={history}
          />
        )}
      </Container>
    </>
  );
};

const mapState = ({ auth }) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    user: auth.user,
  };
};

SingleMovie.propTypes = {
  isAuthenticated: bool,
  user: shape({}),
  history: shape({}),
  match: shape({
    params: shape({
      id: number
    })
  })
}

export default connect(mapState)(SingleMovie);

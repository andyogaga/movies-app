import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { getMovieDetail } from "../../store/actions/movie.actions";

import { Container, Header } from "semantic-ui-react";
import { WelcomeBoard } from "../../common/styles";
import PageLoader from "../../components/loader.component";
import SingleMovieDetails from "./single-movie";

const SingleMovie = (props) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = props;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const id =
    props.match && props.match.params && props.match.params.id
      ? props.match.params.id
      : "";

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
      <WelcomeBoard>
        <Header as="h1" color="blue">
          Movies
        </Header>
      </WelcomeBoard>
      <Container>
        {loading ? (
          <PageLoader />
        ) : (
          <SingleMovieDetails movie={movie} isAuthenticated={isAuthenticated} />
        )}
      </Container>
    </>
  );
};

const mapState = ({ auth }) => {
  return {
    isAuthenticated: auth.isAuthenticated,
  };
};

export default connect(mapState)(SingleMovie);

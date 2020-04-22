import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { getFavourites } from "../../store/actions/favourite.actions";
import { Container, Header } from "semantic-ui-react";
import { WelcomeBoard } from "../../common/styles";
import { bool, arrayOf, shape } from "prop-types";
import Favourites from "./favourites";

const FavouritesContainer = ({ isAuthenticated, movies }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getFavourites(id));
  }, []);
  return (
    <>
      <WelcomeBoard >
        <Header as="h1" color="blue" >Movies</Header>
      </WelcomeBoard>
      <Container>
        <Favourites movies={movies} />
      </Container>
    </>
  );
};

const mapState = ({ auth, movies }) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    user: auth.user,
    movies: movies.movies,
  };
};

FavouritesContainer.propTypes = {
  isAuthenticated: bool,
  movies: arrayOf(shape({}))
}

export default connect(mapState)(FavouritesContainer);

import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getFavourites } from "../../store/actions/favourite.actions";
import { Container, Header } from "semantic-ui-react";
import { WelcomeBoard } from "../../common/styles";
import { bool, arrayOf, shape } from "prop-types";
import Favourites from "./favourites";
import { number } from "prop-types";

const FavouritesContainer = ({ favourites, user }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const {id} = user;
    dispatch(getFavourites(id));
  }, []);
  return (
    <>
      <WelcomeBoard >
        <Header as="h1" color="blue" >Movies</Header>
      </WelcomeBoard>
      <Container>
        <Favourites favourites={favourites} />
      </Container>
    </>
  );
};

const mapState = ({ auth, favourites }) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    user: auth.user,
    favourites: favourites.favourites,
  };
};

FavouritesContainer.propTypes = {
  isAuthenticated: bool,
  favourites: arrayOf(shape({})),
  user: shape({
    id: number
  })
}

export default connect(mapState)(FavouritesContainer);

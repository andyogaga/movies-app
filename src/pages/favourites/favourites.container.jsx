import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getFavourites } from "../../store/actions/favourite.actions";
import { Container, Header } from "semantic-ui-react";
import { WelcomeBoard } from "../../common/styles";
import { bool, arrayOf, shape } from "prop-types";
import Favourites from "./favourites";
import { number } from "prop-types";

const FavouritesContainer = ({ favourites, user, history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const {id} = user;
    dispatch(getFavourites(id));
  }, []);
  return (
    <>
      <WelcomeBoard >
        <Header as="h1" color="blue" >Favourites</Header>
      </WelcomeBoard>
      <Container>
        <Favourites favourites={favourites} user={user} history={history} />
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
  }),
  history: shape({})
}

export default connect(mapState)(FavouritesContainer);

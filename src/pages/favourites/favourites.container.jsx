import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { getFavourites } from "../../store/actions/favourite.actions";
import { Container, Header } from "semantic-ui-react";
import { WelcomeBoard } from "../../common/styles";
import { bool, arrayOf, shape } from "prop-types";
import Favourites from "./favourites";
import { number } from "prop-types";
import PageLoader from "../../components/loader.component";
import { useHistory } from 'react-router-dom'

const FavouritesContainer = ({ favourites, user }) => {
  const dispatch = useDispatch();
  const history = useHistory()
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);



  useEffect(() => {
    const { id } = user;
    setLoading(true);
    dispatch(getFavourites(id, setLoading));
  }, []);

  const paginateFavourites = () => {
    if (Array.isArray(favourites)) {
      return favourites.slice((page - 1) * 10, page * 10);
    }
    return [];
  };

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <>
          <WelcomeBoard>
            <Header as="h1" color="blue">
              Favourites
            </Header>
          </WelcomeBoard>
          <Container textAlign="center" style={{ marginBottom: "6rem" }}>
            <Favourites
              favourites={paginateFavourites}
              user={user}
              history={history}
              setPage={setPage}
              setLoading={setLoading}
              page={page}
            />
          </Container>
        </>
      )}
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
    id: number,
  }),
};

export default connect(mapState)(FavouritesContainer);

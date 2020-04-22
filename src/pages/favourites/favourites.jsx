import React from "react";
import { Grid, Pagination } from "semantic-ui-react";
import MovieCard from "../../components/movie-card.component";
import { removeFavourite } from "../../store/actions/favourite.actions";
import { useDispatch } from "react-redux";
import { shape, func } from "prop-types";
import { number } from "prop-types";

const Favourites = ({ favourites, user, history, setPage, setLoading, page }) => {
  const dispatch = useDispatch();

  const onRemoveFavourite = (id, cb) => {
    dispatch(removeFavourite({ movieId: id, userId: user.id }, cb));
  };

  return (
    <>
      <Grid columns={4} doubling>
        {
          favourites().map((favourite) => {
            return (
              <Grid.Column key={favourite.id}>
                <MovieCard
                  movie={favourite}
                  isFavourite
                  removeFavourite={onRemoveFavourite}
                  user={user}
                  history={history}
                  setLoading={setLoading}
                />
              </Grid.Column>
            );
          })}
      </Grid>
      <Pagination
        style={{ marginTop: "2rem", textAlign: "center" }}
        boundaryRange={0}
        defaultActivePage={1}
        onPageChange={(e, data) => {
          setPage(data.activePage);
        }}
        activePage={page}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={2}
      />
    </>
  );
};

Favourites.propTypes = {
  favourites: func,
  user: shape({}),
  history: shape({}),
  setPage: func,
  setLoading: func,
  page: number
};
export default Favourites;

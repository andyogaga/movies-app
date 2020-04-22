import React from "react";
import { Grid, Pagination } from "semantic-ui-react";
import MovieCard from "../../components/movie-card.component";
import { arrayOf, shape, bool } from "prop-types";
import { func } from "prop-types";
import { number } from "prop-types";

const Home = ({ movies, isAuthenticated, history, setPage, page }) => {
  return (
    <>
      <Grid columns={4} doubling>
        {Array.isArray(movies) &&
          movies.map((movie) => {
            return (
              <Grid.Column key={movie.id}>
                <MovieCard
                  movie={movie}
                  isAuthenticated={isAuthenticated}
                  history={history}
                />
              </Grid.Column>
            );
          })}
      </Grid>
      <Pagination
        style={{marginTop: '2rem', textAlign: 'center'}}
        boundaryRange={0}
        onPageChange={(e, data) => {
          setPage(data.activePage)
        }}
        defaultActivePage={1}
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

Home.propTypes = {
  movies: arrayOf(shape({})),
  isAuthenticated: bool,
  history: shape({}),
  setPage: func,
  page: number
};

export default Home;

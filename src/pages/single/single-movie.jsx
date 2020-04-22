import React from "react";
import { Grid, Image, Header, Button } from "semantic-ui-react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addFavourite } from "../../store/actions/favourite.actions";
import { shape, bool, number, func, string, arrayOf } from "prop-types";

const SingleMovieDetails = ({
  movie,
  isFavourite,
  user,
  isAuthenticated,
  history,
}) => {
  const dispatch = useDispatch();
  return (
    <Grid columns={2}>
      <Grid.Column>
        <Image src={movie.posterPath} wrapped ui verticalAlign fluid rounded />
      </Grid.Column>
      <Grid.Column verticalAlign>
        <Header as="h3" color="blue">
          {movie.title}
        </Header>
        <p className="date">
          {moment(movie.releaseDate.join(" ")).format("ddd, DD MMM, YYYY")}
        </p>
        <p>{movie.overview}</p>
        <br />
        <p>
          <span style={{ fontWeight: "bold" }}>Runtime: </span>
          {`${movie.runtime} minutes`}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Budget: </span>
          {`$${movie.budget}`}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Rating: </span>
          {`${movie.voteAverage}`}
        </p>
        <p>
          <span style={{ fontWeight: "bold" }}>Homepage: </span>
          {`${movie.homepage}`}
        </p>
        {!isFavourite ? (
          <Button
            basic
            color="red"
            onClick={() => {
              if (isAuthenticated) {
                dispatch(
                  addFavourite(
                    { movieId: movie.id, userId: user.id },
                    (res) => {
                      if (res) {
                        history.push("/favourites");
                      }
                    }
                  )
                );
              } else {
                history.push("/login");
              }
            }}
          >
            Add Favourite
          </Button>
        ) : null}
      </Grid.Column>
    </Grid>
  );
};

SingleMovieDetails.propTypes = {
  movie: shape({
    title: string,
    releaseDate: arrayOf(number),
    overview: string,
    voteAverage: number,
    homepage: string,
    budget: number,
    runtime: number,
  }),
  isFavourite: bool,
  user: shape({
    id: number,
  }),
  isAuthenticated: bool,
  history: shape({
    push: func,
  }),
};

export default SingleMovieDetails;

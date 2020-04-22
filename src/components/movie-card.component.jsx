import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";
import { bool, func, shape, string, arrayOf } from "prop-types";
import { number } from "yup";

const MovieCard = ({
  movie,
  removeFavourite,
  isFavourite,
  isAuthenticated,
  history
}) => {
  return (
    <Card>
      <Image
        src={movie.posterPath}
        style={{ maxHeight: "25rem", width: "100%" }}
      />
      <Card.Content>
        <Card.Header>{movie.title}</Card.Header>
        <Card.Meta>
          <span className="date">
            {moment(movie.releaseDate.join(" ")).format("ddd, DD MMM, YYYY")}
          </span>
        </Card.Meta>
        <Card.Description>{movie.overview}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="right">
          {isFavourite ? (
            <Icon
              circular
              inverted
              color="red"
              name="delete"
              onClick={() => {
                if (typeof removeFavourite === "function") {
                  removeFavourite(movie.id);
                }
              }}
            />
          ) : null}
          {isAuthenticated && !isFavourite ? (
            <Icon
              circular
              inverted
              color="green"
              name="add"
              onClick={() => {
                if (typeof removeFavourite === "function") {
                  removeFavourite(movie.id);
                }
              }}
            />
          ) : null}
          <Icon
            circular
            inverted
            color="green"
            name="eye"
            link
            onClick={() => {
              history.push(`/movie/${movie.id}`)
            }}
          />
        </div>
      </Card.Content>
    </Card>
  );
};

MovieCard.propTypes = {
  isAuthenticated: bool,
  isFavourite: bool,
  removeFavourite: func,
  movie: shape({
    id: number,
    posterPath: string,
    overview: string,
    releaseDate: arrayOf(number),
    title: string,
  }),
  history: shape({
    push: func
  })
};

export default MovieCard;

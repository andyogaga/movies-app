import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, removeFavourite, isFavourite }) => {
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
          {!isFavourite ? (
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

          <Icon
            circular
            inverted
            color="blue"
            name="eye"
            as={Link}
            onClick={() => {}}
            to={`/movie/${movie.id}`}
          />
        </div>
      </Card.Content>
    </Card>
  );
};

export default MovieCard;

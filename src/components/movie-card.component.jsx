import React from "react";
import { Card, Image, Button } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <Image src={movie.posterPath} wrapped ui={false} />
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
        <div className="ui two buttons">
          <Button basic color="blue" floated="right" as={Link} to={`/movie/${movie.id}`} >
            View
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default MovieCard;

import React from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";
import moment from "moment";

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <Image src={movie.posterPath} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{movie.posterPath}</Card.Header>
        <Card.Meta>
          <span className="date">
            {moment(movie.releaseDate.join(" ").format("dd, MM, YYYY"))}
          </span>
        </Card.Meta>
        <Card.Description>{movie.overview}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Approve
          </Button>
          <Button basic color="red">
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default MovieCard;

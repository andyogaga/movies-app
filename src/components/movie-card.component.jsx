import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import moment from "moment";
import { bool, func, shape, string, arrayOf } from "prop-types";
import { number } from "yup";
import { getFavourites } from "../store/actions/favourite.actions";
import { useDispatch } from "react-redux";

const MovieCard = ({
  movie,
  removeFavourite,
  isFavourite,
  history,
  setLoading,
  user
}) => {
  const dispatch = useDispatch()
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
        <Card.Description
          style={{
            width: "100%",
            height: "7rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {movie.overview}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="right">
          {isFavourite ? (
            <Icon
              circular
              style={{cursor: 'pointer'}}
              inverted
              color="red"
              name="delete"
              onClick={() => {
                if (typeof removeFavourite === "function") {
                  removeFavourite(movie.id, res => {
                    if(res){
                      dispatch(getFavourites(user && user.id, setLoading))
                    }
                  });
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
              history.push(`/movie/${movie.id}`);
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
    push: func,
  }),
  setLoading: func,
  user: shape({
    id: number
  })
};

export default MovieCard;

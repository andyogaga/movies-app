import React from 'react'
import { Grid, Image, Header } from 'semantic-ui-react'

const SingleMovieDetails = ({movie}) => {
  return (
    <Grid columns={2}>
      <Grid.Column >
      <Image src={movie.posterPath} wrapped ui verticalAlign fluid rounded />
      </Grid.Column>
      <Grid.Column verticalAlign >
        <Header >
          {movie.title}
        </Header>
        <Header >
          {movie.title}
        </Header>
        <Header >
          {movie.title}
        </Header>
        <Header >
          {movie.title}
        </Header>
        <Header >
          {movie.title}
        </Header>
      </Grid.Column>
    </Grid>
  )
}

export default SingleMovieDetails

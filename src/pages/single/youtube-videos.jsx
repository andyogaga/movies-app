import React from 'react'
import ReactPlayer from 'react-player'
import { Grid } from 'semantic-ui-react';
import { arrayOf, shape } from 'prop-types';

const YoutubeVideos = ({videos}) => {
  console.log('I am here to check')
  return (
    <Grid columns={2} doubling>
        {Array.isArray(videos) &&
          videos.map((video) => {
            return (
              <Grid.Column key={video.key}>
                <ReactPlayer
                  width="100%"
                  url={`https://www.youtube.com/watch?v=${video.key}`}
                />
              </Grid.Column>
            );
          })}
      </Grid>
  )
}

YoutubeVideos.propTypes = {
  videos: arrayOf(shape({}))
}

export default YoutubeVideos

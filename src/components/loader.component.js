import React from 'react'
import {Loader, Dimmer} from 'semantic-ui-react'

const PageLoader = ({size}) => (
  <Dimmer active >
    <Loader size={size ? size : "huge"} content="Loading..." />
  </Dimmer>
)

export default PageLoader
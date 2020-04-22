import styled from 'styled-components'
import {Header, Grid} from 'semantic-ui-react'

export const StyledLoginGridColumn = styled(Grid.Column)`
  &&& {
    margin-top: 3rem;
  }
  .header {
    text-transform: uppercase;
  }

  label {
    font-weight: 500 !important;
  }

  .button {
    margin-top: 2rem;
  }
`

export const StyledLoginFooter = styled(Header)`
  &&& {
    font-weight: normal;
    text-transform: inherit;
    .button {
      text-transform: uppercase;
      font-weight: bold;
      box-shadow: none !important;
      border: none;
      padding: 1rem;
    }
  }
`

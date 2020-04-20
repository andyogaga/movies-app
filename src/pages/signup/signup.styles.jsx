import styled from 'styled-components'
import {Header, Grid} from 'semantic-ui-react'

export const StyledSignupGridColumn = styled(Grid.Column)`
  &&& {
    background-color: #f9f9f9;
    border-radius: 1.5rem;
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

export const StyledSignupFooter = styled(Header)`
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

import styled from "styled-components";
import { Input, Segment } from "semantic-ui-react";

export const StyledFormInput = styled(Input)`
  &&& input {
    background: #fff;
    border: ${(props) => `1px solid ${props.color ? props.color : "#bebdbd"}`};
    border-radius: ${(props) =>
      `${props.borderRadius ? props.borderRadius : "0.3rem"}`};
    padding: ${(props) => (props.borderRadius ? props.borderRadius : "0.8rem")};
  }
`;

export const StyledSegment = styled(Segment)`
  &&& {
    border-radius: ${(props) =>
      `${props.borderRadius ? props.borderRadius : "0.8rem"}`};
    border: ${(props) => `1px solid ${props.color ? props.color : "#f0f0f0"}`};
    box-shadow: 2px 2px 2px #f0f0f0;
    display: flex;
  flex-direction: column;
  }
`;

export const BaseLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .pushable:not(body) {
    transform: none;
  }

  .pushable:not(body) > .ui.sidebar,
  .pushable:not(body) > .fixed,
  .pushable:not(body) > .pusher:after {
    position: fixed;
  }
`

export const WelcomeBoard = styled.div`
  &&& {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    height: 35vh;
    margin-bottom: 2rem;
  }
`
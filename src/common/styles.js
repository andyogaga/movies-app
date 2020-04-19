import styled from "styled-components";
import { Input, Segment } from "semantic-ui-react";

export const StyledFormInput = styled(Input)`
  &&& input {
    background: #fff;
    border: ${(props) => `1px solid ${props.color ? props.color : "blue"}`};
    border-radius: ${(props) =>
      `${props.borderRadius ? props.borderRadius : "0.3rem"}`};
    padding: ${(props) => (props.borderRadius ? props.borderRadius : "0.8rem")};
  }
`;

export const StyledSegment = styled(Segment)`
  &&& {
    border-radius: ${(props) =>
      `${props.borderRadius ? props.borderRadius : "0.8rem"}`};
    border: ${(props) => `1px solid ${props.color ? props.color : "blue"}`};
    box-shadow: none;
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
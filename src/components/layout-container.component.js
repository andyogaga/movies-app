import React from "react";
import {
  Responsive,
  Container,
  Menu,
  Button,
} from "semantic-ui-react";
import { BaseLayoutContainer } from "../common/styles";
import { Link } from "react-router-dom";

const ResponsiveContainer = ({ isAuthenticated, children }) => {

  return (
    <BaseLayoutContainer>
      <Responsive
        getWidth={() => window.innerWidth}
        minWidth={Responsive.onlyTablet.minWidth}
        style={{ flex: 1 }}
      >
        <Menu>
          <Container fluid style={{ alignItems: "center", padding: "0 2rem" }}>
            <Menu.Menu position="left" style={{ alignItems: "center" }}>
              <Menu.Item as={Link} to="/" name="Home" />
            </Menu.Menu>
            <Menu.Item position="right">
              {isAuthenticated ? (
                <>
                <Button as={Link} to="/favourites" basic>
                  Favourites
                </Button>
                <Button onClick={() => {}} basic color="blue">
                  Logout
                </Button>
                </>
              ) : (
                <Button onClick={() => {}} basic color="blue">
                  Login / Signup
                </Button>
              )}
            </Menu.Item>
          </Container>
        </Menu>
        {children}
      </Responsive>
    </BaseLayoutContainer>
  );
};

export default ResponsiveContainer;

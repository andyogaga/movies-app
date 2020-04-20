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
        minWidth={Responsive.onlyMobile.minWidth}
        style={{ height: '100vh' }}
      >
        <Menu>
          <Container fluid style={{ alignItems: "center", padding: "0 2rem" }}>
            <Menu.Item position="right">
            <Menu.Item as={Link} to="/" name="Home" />
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

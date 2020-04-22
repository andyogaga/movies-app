import React from "react";
import { Responsive, Container, Menu, Button } from "semantic-ui-react";
import { BaseLayoutContainer } from "../common/styles";
import { Link } from "react-router-dom";
import { bool, node } from "prop-types";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../store/actions/action.types";

const ResponsiveContainer = ({ isAuthenticated, children }) => {
  const dispatch = useDispatch();
  return (
    <BaseLayoutContainer>
      <Responsive
        getWidth={() => window.innerWidth}
        minWidth={Responsive.onlyMobile.minWidth}
      >
        <Menu style={{ margin: 0 }}>
          <Container fluid style={{ alignItems: "center", padding: "0 2rem" }}>
            <Menu.Item position="right">
              <Menu.Item as={Link} to="/" name="Home" />
              {isAuthenticated ? (
                <>
                  <Menu.Item as={Link} to="/favourites" name="Favourites" />
                  <Menu.Item
                    as={Link}
                    to="/"
                    onClick={() => {
                      dispatch({ type: LOGOUT });
                    }}
                    basic
                    color="red"
                  >
                    Logout
                  </Menu.Item>
                </>
              ) : (
                <Button as={Link} to="/login" basic color="blue">
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

ResponsiveContainer.propTypes = {
  isAuthenticated: bool,
  children: node,
};

export default ResponsiveContainer;

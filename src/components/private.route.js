import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (props) => {
  const { isAuthenticated, component: Component, ...rest } = props;
  const renderProtectedComponent = () => {
    if (!isAuthenticated) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              from: props.location,
            },
          }}
        />
      );
    } else {
      return <Component {...props} isAuthenticated />;
    }
  };
  return <Route {...rest} render={renderProtectedComponent} />;
};

export default PrivateRoute;

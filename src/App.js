import React, { Suspense } from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";

import { createBrowserHistory } from "history";
import { useSelector, Provider } from "react-redux";
import PageLoader from "./components/loader.component";
import LoginContainer from "./pages/login/login.container";
import ResponsiveContainer from "./components/layout-container.component";
import PrivateRoute from "./components/private.route";
import store from "./store";
import SignupContainer from "./pages/signup/signup.container";
import HomeContainer from "./pages/home/home.container";

const history = createBrowserHistory();

export const Root = () => {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  return (
    <div style={{ maxWidth: "100%", width: "100%" }}>
      <Router history={history}>
        <Suspense fallback={<PageLoader />}>
          <ResponsiveContainer isAuthenticated={isAuthenticated}>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route exact path="/login" component={LoginContainer} />
              <Route exact path="/signup" component={SignupContainer} />

              <PrivateRoute
                isAuthenticated={isAuthenticated}
                path="/my/movies"
              />
              <PrivateRoute
                isAuthenticated={isAuthenticated}
                path="/movies/:id"
              />
              <PrivateRoute
                // component={}
                path="/favourites"
              />
              <PrivateRoute
                // component={}
                path="/favourites/:id"
              />
              {/* <Route component={NoMatch} /> */}
            </Switch>
          </ResponsiveContainer>
        </Suspense>
      </Router>
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;

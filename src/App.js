import React, { Suspense, lazy } from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import { createBrowserHistory } from "history";
import { useSelector, Provider } from "react-redux";
import PageLoader from "./components/loader.component";
import LoginContainer from "./pages/login/login.container";
import ResponsiveContainer from "./components/layout-container.component";
import PrivateRoute from "./components/private.route";
import store, { persistor } from "./store";
import SignupContainer from "./pages/signup/signup.container";
import HomeContainer from "./pages/home/home.container";
import SingleMovie from "./pages/single/single-movie.container";
import { PersistGate } from "redux-persist/integration/react";
import 'react-toastify/dist/ReactToastify.css'

const Favourites = lazy(() =>
  import("./pages/favourites/favourites.container")
);
export const history = createBrowserHistory();


export const Root = () => {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  return (
    <div style={{ maxWidth: "100%", width: "100%" }}>
      <Router history={history}>
        <Suspense fallback={<PageLoader />}>
          <ResponsiveContainer isAuthenticated={isAuthenticated}>
            <Switch>
              <Route exact path="/login" component={LoginContainer} />
              <Route exact path="/signup" component={SignupContainer} />
              <Route path="/movie/:id" component={SingleMovie} />
              <PrivateRoute
                isAuthenticated={isAuthenticated}
                component={Favourites}
                path="/favourites"
              />
              <Route path="/" component={HomeContainer} />
              {/* <Route component={NoMatch} /> */}
            </Switch>
          </ResponsiveContainer>
        </Suspense>
      </Router>
      <ToastContainer autoClose={4000} hideProgressBar />
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<PageLoader />} persistor={persistor}>
      <Root />
    </PersistGate>
  </Provider>
);

export default App;

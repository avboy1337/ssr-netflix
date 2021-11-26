import "isomorphic-fetch";
import "babel-polyfill";
import React from "react";
import { hot } from "react-hot-loader";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./pages/Home";
import Users from "./pages/Users";
import User from "./pages/User";
import About from "./pages/About";
import Footer from "./components/Footer/Footer";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import styles from "./App.css";

const App = ({ Router, location, context, store }) => (
  <Provider store={store}>
    <React.StrictMode>
      <ErrorBoundary>
        <Router location={location} context={context}>
          <React.Fragment>
            <Switch>
              <Route exact path="/search" component={Home} />
              <Route path="/users/:userId" component={User} />
              <Route path="/users" component={Users} />
              <Route path="/about" component={About} />
              <Redirect to="/search" />
            </Switch>
            <Footer />
          </React.Fragment>
        </Router>
      </ErrorBoundary>
    </React.StrictMode>
  </Provider>
);

App.defaultProps = {
  location: null,
  context: null
};

export default hot(module)(App);

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

const App = ({ Router, location, context, store }) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <nav>
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" exact>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/users" className="nav-link">
                    Users
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-sm-10">
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/users/:userId" component={User} />
              <Route path="/users" component={Users} />
              <Route path="/about" component={About} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  </Provider>
);

App.defaultProps = {
  location: null,
  context: null
};

export default hot(module)(App);

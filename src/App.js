import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import Auth from "./Auth0/Auth0";
import Callback from "./Callback";
import Dashboard from "./Dashboard";
import NavMenu from "./NavMenu";
import UserProfile from "./UserProfile";

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  render() {
    return (
      <>
        <NavMenu auth={this.auth} />
        <div className="body">
          <Route
            path="/"
            exact
            render={props => <Dashboard auth={this.auth} {...props} />}
          />
          <Route
            path="/callback"
            render={props => <Callback auth={this.auth} {...props} />}
          />
          <Route
            path="/profile"
            render={props =>
              this.auth.isAuthenticated() ? (
                <UserProfile auth={this.auth} {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </div>
      </>
    );
  }
}

export default App;

import React from "react";
import Public from "./pages/Public"
import Home from "./pages/Home"
import Nav from "../components/Nav"
import FunWithState from "./pages/FunWithState"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";


const AuthExample = () => (
  <Router>
    <div>
    <Nav/>
    <Route path="/" exact component={Home} /> 
    <Route path="/public" exact component={Public} />
    <Route path="/login" exact component={Login} />
    <Route path="/funwithstate" exact component={FunWithState} />
    <PrivateRoute path="/protected" component={Protected} />
    <br/>
    <AuthButton />
    </div>
  </Router>
);

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button className="btn btn-danger"
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <div>You are not logged in.</div>
    )
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);


const Protected = () => <h3>Protected</h3>;

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {

    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>Click below to login</p>
        <button className="btn btn-danger" onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default AuthExample;
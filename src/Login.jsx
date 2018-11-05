import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;

    if (this.props.isAuthenticated === true) {
      return <Redirect to="/employees" />;
    } else {
      return (
        <div>
          <h1>Login Page</h1>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={this.handleOnChange}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={this.handleOnChange}
          />
          <br />
          <button
            onClick={() =>
              this.props.handleLogin(this.state.email, this.state.password)
            }
          >
            Login
          </button>
        </div>
      );
    }
  }
}

export default Login;

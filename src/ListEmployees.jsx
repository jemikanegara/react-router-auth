import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class ListEmployees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }
  render() {
    if (this.props.isAuthenticated === false) {
      return <Redirect to="/login" />;
    } else {
      return (
        <div>
          <h1>List of Employees</h1>
        </div>
      );
    }
  }
}

export default ListEmployees;

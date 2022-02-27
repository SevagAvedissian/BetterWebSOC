import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department: "",
      teacher: "",
      class: "",
    };

    this.handleChange = this.handleTeacherChange.bind(this);
    this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
    this.handleClassChange = this.handleClassChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDepartmentChange(event) {
    this.setState({ department: event.target.department });
  }

  handleTeacherChange(event) {
    this.setState({ teacher: event.target.teacher });
  }

  handleClassChange(event) {
    this.setState({ department: event.target.class });
  }
  handleSubmit(event) {
    alert(
      "submitted all three" +
        this.state.class +
        this.state.department +
        this.state.teacher
    );
    event.preventDefault();
  }

  render() {
    return (
      <div className="container2">
        <form onSubmit={this.handleSubmit}>
          <label>
            Department:
            <input
              type="text"
              teacher={this.state.department}
              onChange={this.handleDepartmentChange}
            />
          </label>

          <label>
            Teacher:
            <input
              type="text"
              teacher={this.state.teacher}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Class:
            <input
              type="text"
              teacher={this.state.class}
              onChange={this.handleClassChange}
            />
          </label>
          <input type="submit" department="Submit" />
        </form>
      </div>
    );
  }
}

export default App;

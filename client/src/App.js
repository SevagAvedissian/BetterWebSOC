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
    this.handleSubmit = this.handleTeacherSubmit.bind(this);

    this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
    this.handleDepartmentSubmit = this.handleDepartmentSubmit.bind(this);

    this.handleClassChange = this.handleClassChange.bind(this);
    this.handleClassSubmit = this.handleClassSubmit.bind(this);
  }

  handleDepartmentChange(event) {
    this.setState({ department: event.target.department });
  }
  handleDepartmentSubmit(event) {
    alert("A dep was submitted: " + this.state.department);
    event.preventDefault();
  }

  handleTeacherChange(event) {
    this.setState({ teacher: event.target.teacher });
  }
  handleTeacherSubmit(event) {
    alert("A teacher was submitted: " + this.state.teacher);
    event.preventDefault();
  }

  handleClassChange(event) {
    this.setState({ department: event.target.class });
  }
  handleClassSubmit(event) {
    alert("A class was submitted: " + this.state.class);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container2">
        <form onSubmit={this.handleDepartmentSubmit}>
          <label>
            Department:
            <input
              type="text"
              teacher={this.state.department}
              onChange={this.handleDepartmentChange}
            />
          </label>
          <input type="submit" department="Submit" />
        </form>

        <form onSubmit={this.handleSubmit}>
          <label>
            Teacher:
            <input
              type="text"
              teacher={this.state.teacher}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" teacher="Submit" />
        </form>

        <form onSubmit={this.handleClassSubmit}>
          <label>
            Class:
            <input
              type="text"
              teacher={this.state.class}
              onChange={this.handleClassChange}
            />
          </label>
          <input type="submit" class="Submit" />
        </form>
      </div>
    );
  }
}

export default App;

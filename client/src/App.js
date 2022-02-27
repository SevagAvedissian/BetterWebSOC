import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department: "",
      teacher: "",
      class: "",
      term: "",
    };

    this.handleChange = this.handleTeacherChange.bind(this);
    this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
    this.handleClassChange = this.handleClassChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDepartmentChange(event) {
    this.setState({ department: event.target.department.value });
  }

  handleTeacherChange(event) {
    this.setState({ teacher: event.target.teacher.value });
  }

  handleClassChange(event) {
    this.setState({ classCode: event.target.class.value });
  }

  handleTermChange(event) {
    this.setState({ classCode: event.target.term.value });
  }

  handleSubmit(event) {
    alert(
      "submitted all three" +
        this.state.class +
        this.state.department +
        this.state.teacher +
        this.state.term
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
              department={this.state.department.value}
              onChange={this.handleDepartmentChange}
            />
          </label>
          <br />

          <label>
            Teacher:
            <input
              type="text"
              teacher={this.state.teacher.value}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Class:
            <input
              type="text"
              classCode={this.state.class.value}
              onChange={this.handleClassChange}
            />
          </label>
          <br />

          <label>
            Term
            <select term={this.state.term} onChange={this.handleTermChange}>
              <option value="2021 Fall">2021 Fall</option>
              <option value="2022 Winter">2022 Winter</option>
              <option value="2022 Spring">2022 Spring</option>
            </select>
          </label>

          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;

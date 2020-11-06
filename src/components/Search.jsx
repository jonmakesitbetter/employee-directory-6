import React, { Component } from "react";
import API from "../utils/API";
import Table from "./Table";

class Search extends Component {
  state = { employees: [], searchTerm: "", filteredEmployees: [] };

  componentDidMount() {
    API.getEmployees()
      .then((res) => {
        console.log(res);
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  }
  handleInputChange = (event) => {
    this.setState(
      {
        searchTerm: event.target.value,
      },
      () => {
        if (this.state.searchTerm === "") {
          this.setState({ filteredEmployees: this.state.employees });
        } else {
          const searchedEmployee = this.state.employees.filter((employee) => {
            return (
              employee.name.first
                .slice(0, this.state.searchTerm.length)
                .toLowerCase() === this.state.searchTerm.toLowerCase()
            );
          });
          this.setState({ filteredEmployees: searchedEmployee });
        }
      }
    );
  };

  handleSort = () => {
    var employeeArray = this.state.employees;
    employeeArray.sort((a, b) => {
      if (a.name.first < b.name.first) return -1;
      if (a.name.first > b.name.first) return 1;
      return 0;
    });

    this.setState({
      filterData: employeeArray,
    });
  };


  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Employee Directory</h1>
            <p class="lead">
              
            </p>

            <label for="exampleInputPassword1">Search</label>
            <input 
              type="input"
              class="form-control"
              name="employee-search"
              value={this.state.searchTerm}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <Table
          employees={this.state.filteredEmployees}
          handleSort={this.handleSort}
        />
      </div>
    );
  }
}

export default Search;

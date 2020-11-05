import React, { Component } from "react";
import API from "../utils/API";



class Search extends Component {

    state = { employees: [], searchTerm: "", filteredEmployees: [] }

    componentDidMount() {
        API.getEmployees()
            .then(res => {
                console.log(res);
                this.setState({ employees: res.data.results, filteredEmployees: res.data.results })
            }).catch(err => (console.log(err)));
    }
    handleInputChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        }, () => {
            if (this.state.searchTerm === "") {
                this.setState({ filteredEmployees: this.state.employees });
            } else {
                const searchedEmployee = this.state.employees.filter((employee) => {
                    return employee.name.first.slice(0, this.state.searchTerm.length).tolowerCase() === this.state.searchTerm.toLowerCase()
                })
                this.setState({ filteredEmployees: searchedEmployee })
            }
        })
    }

    render() {
        return (
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Fluid jumbotron</h1>
                    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
        );
    }
}

export default Search;
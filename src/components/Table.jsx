import React, { Component } from "react";

class Table extends Component {


    handleSortFirst = () => {
        var employeeArray = this.props.employees;
        employeeArray.sort((a, b) => {
            if (a.name.first < b.name.first) return -1;
            if (a.name.first > b.name.first) return 1;
            return 0;
        })

        this.setState({
            filterData: employeeArray
        });
    }

    handleSortlast = () => {
        var employeeArray = this.props.employees;
        employeeArray.sort((a, b) => {
            if (a.name.last < b.name.last) return -1;
            if (a.name.last > b.name.last) return 1;
            return 0;
        })

        this.setState({
            filterData: employeeArray
        });
    }

    render() {
        return <table className="table table-dark" data={this.props.data}>
            <thead>
                <tr>
                    <th scope="col">Portrait</th>
                    <button className="link"><th scope="col" onClick={this.handleSortFirst}>First</th></button>
                    <button className="link"><th scope="col" onClick={this.handleSortlast}>First</th></button>
                    <th scope="col">Email</th>
                </tr>
            </thead>
        </table>
    }

}
export default Table;

{/* <tbody>
{this.props.employees.map((employee, id) => (


    <tr>
        <th scope="row"><img src={employee.picture.medium} alt="employee" key={id} /></th>
        <td>{employee.name.first}</td>
        <td>{employee.name.last}</td>
        <td>{employee.email}</td>
    </tr>
))}
</tbody> */}
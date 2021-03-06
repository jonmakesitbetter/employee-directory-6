import React, { Component } from "react";

function Table(props) {
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">Portrait</th>
          <div>
            <button><th className="link dark" scope="col" onClick={props.handleSort}>
              <strong>First</strong>
            </th></button>
          </div>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((employee, id) => (
          <tr>
            <th scope="row">
              <img src={employee.picture.medium} alt="employee" key={id} />
            </th>
            <td>{employee.name.first}</td>
            <td>{employee.name.last}</td>
            <td>{employee.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;

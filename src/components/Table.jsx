import React, { Component } from "react";

class Table extends Component {


//     handleSort = () => {
//     var employeeArray = this.props.employee;
//     employeeArray.sort((a, b)=> {
//         if (a.name.first < b.name.first) return -1;
//         if (a.name.first > b.name.first) return 1;
//         return 0;
//     })

//     this.setState.employeeArray({
//         filterData: employeeArray
//     });
// }

render(){
  return <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Portrait</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
}

}
export default Table;
import React ,  {Component} from  'react';
import './App.css';

const TableHeader  = ()=>{
  return(<thead><tr class="row100 head">
      <th>Cell-Phone</th>
      <th>Age</th>
      <th>E-Mail</th>
      <th>Gender</th>
	  <th>ID</th>
	  <th>Location</th>
	  <th>User-Name</th>
	  <th>Password</th>
      <th>Name</th>
      <th>Picture</th>
      <th>Registered Date</th>
    </tr></thead>);
}

const TableBody =  props =>{
  const rows = props.resultsData.map( (row, index) =>{

    return(
    <tr key={index}>
        <td>{row.cell}</td>
        <td>{row.age}</td>
        <td>{row.email}</td>
        <td>{row.gender}</td>
        <td>{row.id}</td>
        <td>{row.location}</td>
        <td>{row.username}</td>
        <td>{row.password}</td>
        <td>{row.name}</td>
        <td>{row.picture}</td>
        <td>{row.register}</td>
    </tr>
      );
  } );
  return(<tbody>{rows}</tbody>);

}

class SportsTable extends Component{


  render(){
      const {results} = this.props

      return(
        <table>
          <TableHeader class="table100-head"/>
          <TableBody resultsData={results} class="row100 body" />
        </table>);
  }

}


export default  SportsTable

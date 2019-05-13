import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SportsTable from './SportsTable'
import AddResultForm from './AddFormData'

class App extends Component {

  state = {
    resultsData: [

    ],
  };

  constructor(){
    super();

  }

  componentDidMount() {

    const url = 'https://randomuser.me/api?results=20';


      fetch(url)
        .then(result => {
            result.json().then( (data) => {
              console.log(data);

              var fullState = this.state.resultsData;

              for(var res in data.results){
                var person = data.results[res];

                fullState.push({
                  cell: person.cell,
                  age: person.dob.age,
                  email: person.email,
                  gender:person.gender,
                  id:person.id.value,
                  location: person.location.street +", "+person.location.city +", "+person.location.state,
                  username: person.login.username,
                  password: person.login.sha1,
                  name: person.name.title +" "+ person.name.first + " "+ person.name.last,
                  picture: person.picture.medium,
                  register: person.registered.date

                });
              }

              this.setState({resultsData:fullState});
            });
        });

    }

  handleSubmit = (matchResult) =>{
      this.setState ({betData:this.state.betData, resultsData: [...this.state.resultsData , matchResult]});
  }

  render() {

    return (
      <div className="wrapper">
        <div className="container">
          <h1>My app</h1>
          <br/><br/>
          <SportsTable results={this.state.resultsData}/>
          <AddResultForm handleSubmit={this.handleSubmit}/>
        </div>
      </div>
    );
  }
}

export default App;

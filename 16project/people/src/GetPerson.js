import React, {Component} from 'react';
import './App.css';

class GetPerson extends Component {

    constructor(props){
        super(props);
        this.state = {person:{}}
    }

    getPerson(event){
        const axios = require('axios');
        axios.get('http://localhost:8080/api/products/' + this.state.id)
        .then(res => {
            console.log(res.data);
            this.setState({person:res.data[0]})
        })
        .catch(error => {
            console.log("error fetching person with id" + error);
        })
    }

    onIdChange = (e) => {
        this.setState({id:e.target.value});
    }

    render(){
        return (
            <div>
              Enter id: <input type="text" onChange={this.onIdChange}></input>
              <button onClick={this.getPerson.bind(this)}>Get Person</button>
              <br/>
                Name: {this.state.person.name}
              <br/>
                Country: {this.state.person.country}
            </div>
          );
    }
}

export default GetPerson;
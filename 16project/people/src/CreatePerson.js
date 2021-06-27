import React, {Component} from 'react';
import './App.css';

class CreatePerson extends Component {

    constructor(props){
        super(props);
        this.state = {person:{}}
    }

    createPerson(event){
        const axios = require('axios');
        let body = {
            id: this.state.id,
            name: this.state.name,
            country: this.state.country
        };
        axios.post("http://localhost:8080/api/products", body)
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

    onNameChange = (e) => {
        this.setState({name:e.target.value});
    }

    onCountryChange = (e) => {
        this.setState({country:e.target.value});
    }

    render(){
        return (
            <div>
              Enter id: <input type="text" onChange={this.onIdChange}></input> <br/>
              Enter name: <input type="text" onChange={this.onNameChange}></input> <br/>
              Enter country: <input type="text" onChange={this.onCountryChange}></input> <br/>
              <button onClick={this.createPerson.bind(this)}>Create Person</button>
            </div>
          );
    }
}

export default CreatePerson;
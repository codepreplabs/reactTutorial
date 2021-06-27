import React, {Component} from 'react';
import './App.css';

class UpdatePerson extends Component {

    constructor(props){
        super(props);
        this.state = {person:{}}
    }

    updatePerson(event){
        const axios = require('axios');
        let body = {
            id: this.state.id,
            name: this.state.name,
            country: this.state.country
        };
        axios.put("http://localhost:8080/api/products", body)
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
              <button onClick={this.updatePerson.bind(this)}>Create Person</button>
            </div>
          );
    }
}

export default UpdatePerson;
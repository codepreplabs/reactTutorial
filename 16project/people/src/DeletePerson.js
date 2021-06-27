import React, {Component} from 'react';
import './App.css';

class DeletePerson extends Component {

    constructor(props){
        super(props);
        this.state = {status:""}
    }

    deletePerson(event){
        const axios = require('axios');
        axios.delete('http://localhost:8080/api/products/' + this.state.id)
        .then(res => {
            console.log(res.data);
            this.setState({status:"SUCCESS"});
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
              <button onClick={this.deletePerson.bind(this)}>Delete Person</button>
              <br/>
                Status: {this.state.status}
            </div>
          );
    }
}

export default DeletePerson;
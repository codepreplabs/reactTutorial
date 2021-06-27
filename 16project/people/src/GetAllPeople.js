import React, {Component} from 'react';
import './App.css';

class GetAllPeople extends Component {

    constructor(props){
        super(props);
        this.state = {people:[]}
    }

    componentDidMount(){
        const axios = require('axios');
        axios.get('http://localhost:8080/api/products')
        .then(res => {
            console.log(res.data);
            this.setState({people:res.data})
        })
        .catch(error => {
            console.log("error fetching all people" + error);
        })
    }

    render(){
        return (
            <div>
              <h1>People:</h1>
              <table>
						<thead>
							<tr>
                                <td>Id</td>
								<td>Name</td>
								<td>Country</td>
							</tr>
						</thead>
							<tbody>
								{this.state.people.map(person => 
									<tr>
										<td>{person.id}</td>
										<td>{person.name}</td>
                                        <td>{person.country}</td>
									</tr>
								)}
						    </tbody>
				</table>
            </div>
          );
    }
}

export default GetAllPeople;
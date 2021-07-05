import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class DisplayFlights extends React.Component {

    state = {
        data : []
    }


    componentWillMount(){
        axios.get("http://localhost:8080/flightservices/flights?from="+this.props.match.params.from+"&to="+this.props.match.params.to+"&departureDate="+this.props.match.params.date)
        .then(result => {
            const data = result.data;
            console.log(data);
            this.setState({data});
        })
    }

    render(){
        return (<div>
                    <h2>Flights:</h2>
                    <table>
							<thead>
                                <tr>
                                    <td>Airlines</td>
                                    <td>Departure City</td>
                                    <td>Arrival City</td>
                                    <td>Departure Date and Time</td>
                                </tr>
							</thead>
							<tbody>
									{this.state.data.map(flight =>
										<tr>
											<td>{flight.operatingAirlines}</td>
                                            <td>{flight.departureCity}</td>
                                            <td>{flight.arrivalCity}</td>
                                            <td>{flight.dateOfDeparture} {flight.estimatedDepartureTime}</td>
                                            <td><Link to={'/passengerDetails/'+flight.id}>Select</Link></td>
										</tr>
                                    )}
							</tbody>
					</table>
        </div>)
    }
}

export default DisplayFlights;
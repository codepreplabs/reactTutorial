import React from 'react';
import axios from 'axios';

class PassengerDetails extends React.Component {

    state = {}

    componentWillMount(){
        axios.get('http://localhost:8080/flightservices/flights/'+this.props.match.params.id)
        .then(result => {
            console.log(result.data);
            this.setState(result.data);
        })
    }

    handleSubmit(event){

        event.preventDefault();
        const data = {
            "flightId": this.props.match.params.id,
            "passengerFirstName": this.passengerFirstName,
            "passengerLastName": this.passengerLastName,
            "passengerMiddleName": this.passengerMiddleName,
            "passengerPhone": this.passengerPhone,
            "passengerEmail": this.passengerEmail
        }

        axios.post('http://localhost:8080/flightservices/reservations', data)
        .then(result => {
            console.log(result.status);
            this.props.history.push('/confirmReservation/'+result.data.id);
        })
    }

    render(){
        return (<div>
                <h2>Confirm Reservation</h2>
                <h2>Flight Details:</h2>
                Airline: {this.state.operatingAirlines} <br/>
                Departure City: {this.state.departureCity} <br/>
                Arrival City: {this.state.arrivalCity} <br/>
                Departure Date: {this.state.dateOfDeparture} <br/>

                <h2>Passenger Details:</h2>
                <form>
                    First Name: <input type="text" name="passengerFirstName" onChange={(event)=>{this.passengerFirstName = event.target.value}} /> <br/>
                    Last Name: <input type="text" name="passengerLastName" onChange={(event)=>{this.passengerLastName = event.target.value}} /> <br/>
                    Middle Name: <input type="text" name="passengerMiddleName" onChange={(event)=>{this.passengerMiddleName = event.target.value}} /> <br/>
                    Email: <input type="text" name="passengerEmail" onChange={(event)=>{this.passengerEmail = event.target.value}} /> <br/>
                    Phone Number: <input type="text" name="passengerPhone" onChange={(event)=>{this.passengerPhone = event.target.value}} /> <br/>
                    <button onClick={this.handleSubmit.bind(this)}>Confirm</button>
                </form>
        </div>)
    }
}

export default PassengerDetails;
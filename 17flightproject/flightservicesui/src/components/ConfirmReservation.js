import axios from 'axios';
import React from 'react';


class ConfirmReservation extends React.Component {

    render(){
        return (<div>
                <h2>Confirm Reservation</h2>
                <b>Flight reservation complete. The confirmation code is : {this.props.match.params.id}</b>
        </div>)
    }
}

export default ConfirmReservation;
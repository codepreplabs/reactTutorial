import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ConfirmReservation from './components/ConfirmReservation';
import DisplayFlights from './components/DisplayFlights';
import FindFlights from './components/FindFlights';
import PassengerDetails from './components/PassengerDetails';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={FindFlights}/>
          <Route exact path="/displayFlights/:from/:to/:date" component={DisplayFlights}/>
          <Route exact path="/passengerDetails/:id" component={PassengerDetails}/>
          <Route exact path="/confirmReservation/:id" component={ConfirmReservation}/>
        </Switch>
      </div>
    ); 
  }
}

export default App;

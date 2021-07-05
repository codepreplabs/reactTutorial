import React from 'react';


class FindFlights extends React.Component {

    handleSubmit(event){
        this.props.history.push('displayFlights/'+this.from+'/'+this.to+'/'+this.date);
    }

    render(){
        return (<div>
                    <h2>Find Flights</h2>
                    <form>
                        From: <input type="text" name="from" onChange={e => {this.from = e.target.value}}/>
                        To: <input type="text" name="to" onChange={e => {this.to = e.target.value}}/>
                        Departure Date: <input type="text" name="date" onChange={e => {this.date = e.target.value}}/>
                        <button value="Search" onClick={this.handleSubmit.bind(this)}>Search</button>
                    </form>
        </div>)
    }
}

export default FindFlights;
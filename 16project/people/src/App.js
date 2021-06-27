import './App.css';
import {Route, Switch, Link} from "react-router-dom";
import GetAllPeople from './GetAllPeople';
import UpdatePerson from './UpdatePerson';
import CreatePerson from './CreatePerson';
import DeletePerson from './DeletePerson';
import GetPerson from './GetPerson';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={GetAllPeople} />
        <Route exact path="/GetById" component={GetPerson} />
        <Route path="/Create" component={CreatePerson} />
        <Route path="/Update" component={UpdatePerson} />
        <Route path="/Delete" component={DeletePerson} />
      </Switch>

        <Link to="/Create">Create</Link> <br/>
        <Link to="/GetById">Read</Link> <br/>
        <Link to="/Update">Update</Link> <br/>
        <Link to="/Delete">Delete</Link> <br/>
    </div>
  );
}

export default App;

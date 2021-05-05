import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import AddUser from "./components/AddUser";
import GetUser from "./components/GetUser";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">
          <li> Home</li>
        </Link>
        <Link to="/adduser">
          <li> add user</li>
        </Link>
        <Link to="/getuser">
          <li> get user </li>
        </Link>
      </header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/adduser" component={AddUser} />
        <Route exact path="/getuser" component={GetUser} />
      </Switch>
    </div>
  );
}

export default App;

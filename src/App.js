import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Registration from "./components/registration";
import Login from "./components/login";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Registration} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

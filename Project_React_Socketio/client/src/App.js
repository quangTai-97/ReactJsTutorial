import Login from "./pages/login/Login";
import Messenger from "./pages/messenger/Messenger";
import Registry from "./pages/registry/registry";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user === null ? <Login /> : <Messenger />}
        </Route>

        <Route path="/registry" component={Registry} />

        <Route path="/login">
          {user ? <Redirect to="/messenger" /> : <Login />}
        </Route>
        <Route path="/messenger">{!user ? <Login /> : <Messenger />}</Route>
      </Switch>
    </Router>
  );
}

export default App;

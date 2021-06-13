import Login from "./pages/login/Login";
import Messenger from "./pages/messenger/Messenger";
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
  console.log("!user", !user);
  return (
    <Router>
      <Switch>
        {<Route path="/">{user === null ? <Login /> : <Messenger />}</Route>}
        <Route path="/login">
          {user ? <Redirect to="/messenger" /> : <Login />}
        </Route>
        <Route path="/messenger">
          {!user === true ? <Login /> : <Messenger />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

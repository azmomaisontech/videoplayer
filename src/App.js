import "./App.scss";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Scroll from "./scroll";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/scroll" component={Scroll} />
      </Switch>
    </Router>
  );
}

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Nav from "components/Nav";
import ListDragons from "pages/ListDragons";
import AddDragon from "pages/AddDragon";
import ViewDragon from "pages/ViewDragon";
import Login from "pages/Login";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/">
          <Nav />
          <Switch>
            <PrivateRoute exact path="/" component={<ListDragons />} />
            <PrivateRoute exact path="/add" component={<AddDragon />} />
            <PrivateRoute exact path="/:id" component={<ViewDragon />} />
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
}

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./Users/pages/Users";
import NewMoment from "./Moments/pages/NewMoment";
import UserMoments from "./Moments/pages/UserMoments";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users></Users>
          </Route>
          <Route path="/:userId/places" exact>
            <UserMoments />
          </Route>
          <Route path="/moments-new" exact>
            <NewMoment></NewMoment>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import Customer from "../pages/Customer";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Dashboard />
      </Route>
      <Route path="/customers">
        <Customer />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </Switch>
  );
};

export default Routes;

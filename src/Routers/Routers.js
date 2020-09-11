import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import News from "../pages/News/News";
import Profile from "../pages/Profile/Profile";
import NotFound from "../pages/NotFound/NotFound";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

function Routers() {
  return (
    <div>
      <Switch>
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute path="/News" component={News} />
        <Route exact path="/" render={() => <Login />} />
        <Route path="/Login" render={() => <Login />} />
        <PrivateRoute path="/Profile" component={Profile} />
        <Route component={NotFound} />
        
      </Switch>
    </div>
  );
}

export default Routers;

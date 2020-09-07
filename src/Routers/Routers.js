import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import News from "../pages/News/News";
import Profile from "../pages/Profile/Profile";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

function Routers() {
  return (
    <div>
    <PrivateRoute path="/" component={Home} exact />
      <PrivateRoute path="/home" component={Home} />
      <PrivateRoute path="/News" component={News} />
      <Route path="/Login" render={() => <Login />} />
      <PrivateRoute path="/Profile" component={Profile} />
    </div>
  );
}

export default Routers;

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth } from "../../store/Selectors/Auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector(getAuth);
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;

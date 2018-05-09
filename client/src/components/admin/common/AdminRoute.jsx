import React from 'react';
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ component: Component, isAuthorized, ...rest }) => {
  if (isAuthorized) {
    return (
      <Route
        {...rest}
        render={(props) => <Component {...props} />}
      />
    );
  }

  return (
    <Route
      {...rest}
      render={(props) => <Redirect to={{ pathname: '/' }} />}
    />
  );
};

export default AdminRoute;
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = false;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
}
export default PrivateRoute;

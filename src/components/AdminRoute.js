import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from './../context/userContext';
import LoadingScreen from './common/LoadingScreen';

const AdminRoute = ({ children, ...rest }) => {
  const { state } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={() =>
        state.loading ? (
          <LoadingScreen />
        ) : state.isLogin && state.user.role === 'admin' ? (
          children
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default AdminRoute;

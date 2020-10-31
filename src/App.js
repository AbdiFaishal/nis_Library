import React, { useEffect, useContext } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Home from './pages/Home';
import MyLibrary from './pages/MyLibrary';
import DetailBook from './pages/DetailBook';
import Profile from './pages/Profile';
import AddBook from './pages/AddBook';
import Admin from './pages/Admin';
import ReadBook from './pages/ReadBook';
import AddBookAdmin from './pages/AddBookAdmin';

import PrivateRoute from './components/PrivateRoute';

import { API, setAuthToken } from './config/api';

import { UserContext } from './context/userContext';
// import { BookmarkContext } from './context/bookmarkContext';
import AdminRoute from './components/AdminRoute';

// if token available in localstorage then set default header for auth
if (localStorage.token) setAuthToken(localStorage.token);

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <PrivateRoute path="/home">
        <Home />
      </PrivateRoute>
      <PrivateRoute path="/mylibrary">
        <MyLibrary />
      </PrivateRoute>
      <PrivateRoute path="/profile">
        <Profile />
      </PrivateRoute>
      <PrivateRoute path="/addbook">
        <AddBook />
      </PrivateRoute>
      <PrivateRoute path="/detail/:id">
        <DetailBook />
      </PrivateRoute>
      <PrivateRoute path="/read-book/:id">
        <ReadBook />
      </PrivateRoute>
      <AdminRoute exact path="/admin">
        <Admin />
      </AdminRoute>
      <AdminRoute path="/admin/addbook">
        <AddBookAdmin />
      </AdminRoute>
    </Switch>
  );
};

const App = () => {
  const { dispatch } = useContext(UserContext);
  // const { dispatch: bookmarkDispatch } = useContext(BookmarkContext);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await API.get('/auth');
        dispatch({
          type: 'USER_LOADED',
          payload: res.data.data.user,
        });
      } catch (err) {
        dispatch({
          type: 'AUTH_ERROR',
        });
      }
    };
    loadUser();
  }, []);

  return (
    <Router>
      <div>
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;

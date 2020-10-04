import React, { useContext } from 'react';
import Landing from './pages/Landing';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import MyLibrary from './pages/MyLibrary';
import DetailBook from './pages/DetailBook';
import Profile from './pages/Profile';
import AddBook from './pages/AddBook';
import Admin from './pages/Admin';
import ReadBook from './pages/ReadBook';
import { UserContext, UserContextProvider } from './context/userContext';

const AuthenticatedRoute = ({ children, ...rest }) => {
  const { state } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={() => (state.isLogin ? children : <Redirect to="/" />)}
    />
  );
};

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <AuthenticatedRoute path="/home">
        <Home />
      </AuthenticatedRoute>
      <AuthenticatedRoute path="/mylibrary">
        <MyLibrary />
      </AuthenticatedRoute>
      <AuthenticatedRoute path="/profile">
        <Profile />
      </AuthenticatedRoute>
      <AuthenticatedRoute path="/addbook">
        <AddBook />
      </AuthenticatedRoute>
      <AuthenticatedRoute path="/admin">
        <Admin />
      </AuthenticatedRoute>
      <AuthenticatedRoute path="/detail/:id">
        <DetailBook />
      </AuthenticatedRoute>
      <AuthenticatedRoute path="/read-book">
        <ReadBook />
      </AuthenticatedRoute>
    </Switch>
  );
};

const App = () => {
  return (
    <Router>
      <UserContextProvider>
        <div>
          <AppRoutes />
        </div>
      </UserContextProvider>
    </Router>
  );
};

export default App;

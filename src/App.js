import React from 'react';
import Landing from './pages/Landing';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyLibrary from './pages/MyLibrary';

// const AuthenticatedRoute = ({ children, ...rest }) => {
//   const isAuth = useAuthenticated();

//   return (
//     <Route {...rest} render={() => (isAuth ? children : <Redirect to="/" />)} />
//   );
// };

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/mylibrary">
        <MyLibrary />
      </Route>
    </Switch>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;

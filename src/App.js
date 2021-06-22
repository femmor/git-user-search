import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Dashboard}/>
      <Login path="/login" component={Login}/>
    </Router>
  );
}

export default App;

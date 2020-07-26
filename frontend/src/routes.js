import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import NewSpot from './components/pages/NewSpot';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/new" component={NewSpot} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

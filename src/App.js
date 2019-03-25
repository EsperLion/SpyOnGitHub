import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { UsersList } from './areas/users-list';
import { UserInfo } from './areas/user-info/user-info';
import { NotFound } from './areas/not-found/not-found';


export const App = () => (
  <Router>

    <Switch>

      <Route path='/' exact component={UsersList} />

      <Route path='/user/:login' exact component={UserInfo} />

      <Route component={NotFound} />

    </Switch>

  </Router>
);
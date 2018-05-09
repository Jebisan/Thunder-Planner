import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import JobPage from '../components/Job/JobPage';
import DatePage from '../components/Date/DatePage';
import EditJob from '../components/Job/EditJob';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/jobPage" component={JobPage} />
        <Route path="/edit/:id" component={EditJob} />
        <Route path="/datePage" component={DatePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

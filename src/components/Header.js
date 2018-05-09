import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Administrator</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/jobPage" activeClassName="is-active">JobPage</NavLink>
    <NavLink to="/datePage" activeClassName="is-active">DatePage </NavLink>
  </header>
);

export default Header;

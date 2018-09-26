// @flow
import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="site-header">
      <ul className="site-nav">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/view">View</NavLink></li>
        <li><NavLink to="/schedule">Schedule</NavLink></li>
      </ul>
    </div>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign up!</Link>
  </nav>
);

const logOut = (logout) => (
 <button className="header-button" onClick={logout}>Log Out</button>
);

const topLinks = ({ currentUser, logout }) => (
  currentUser ? logOut(logout) : sessionLinks()
);

export default topLinks;

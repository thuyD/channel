import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <a href="/#/login">Sign in</a>
    <div><a href="/#/signup">Get started</a></div>
  </nav>
);

const logOut = (logout) => (
 <button className="header-button" onClick={logout}>Log Out</button>
);

const topLinks = ({currentUser, logout}) => {
  return currentUser ? logOut(logout) : sessionLinks();
};

export default topLinks;

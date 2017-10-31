import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup flex-center-ver">
    <a href="/#/login">Sign in</a>
    <div><a href="/#/signup">Get started</a></div>
  </nav>
);

const userMenu = (logout, currentUser, ownPost) => (
      <section className="header-logged-in flex-center-ver">
        { ownPost ? <Link id="header-edit" to={`/posts/${ownPost}/edit`}>Edit</Link> : '' }
        <i className="fa fa-search fa-lg" aria-hidden="true"></i>
        <i className="fa fa-bell-o fa-lg" aria-hidden="true"></i>
        <div className="dropdown">
          { currentUser.image_url ?
            <div className="user-avatar"><img src={currentUser.image_url} /></div> :
              <i className="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>
            }
            <div className="dropdown-container">
              <ul className="menu">
                <li><Link to="/posts/new" id="post-new-link">New Story</Link></li>
                <li>Stories</li>
                <div className="line"></div>
                <li>Bookmarks</li>
                <li>Customize your interests</li>
                <div className="line"></div>
                <li>Profile</li>
                <li>Settings</li>
                <li>Help</li>
                <li>
                  <button className="header-logout" onClick={logout}>Log Out</button>
                </li>
              </ul>
            </div>
          </div>
        </section>
);

const topLinks = (props) => {
  const currentUser = props.currentUser;
  return (
    <header className="main-inner-header">
      <div className="main-logo flex-center-ver">
        <a>Our Story</a>
        <div className="logo-container"><a id="logo" href="/">Channel</a></div>
        {
          currentUser ? 
          userMenu(props.logout, currentUser, props.ownPost) :
          sessionLinks()
        }
      </div>
    </header>
  );
};

export default topLinks;

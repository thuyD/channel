import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup flex-center-ver">
    <Link to="/login">Sign in</Link>
    <div><Link to="/signup">Get started</Link></div>
  </nav>
);

const userMenu = (logout, currentUser, ownPost) => (
      <section className="header-logged-in flex-center-ver">
        { ownPost ? <Link id="header-edit" to={`/posts/${ownPost}/edit`}>Edit</Link> : '' }
        <div className="dropdown">
          { currentUser.image_url_t ?
            <div className="user-avatar"><img src={currentUser.image_url_t} /></div> :
              <i className="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>
            }
            <div className="dropdown-container">
              <ul className="menu">
                <li><Link to="/posts/new" id="post-new-link">New Story</Link></li>
                <div className="line"></div>
                <li><Link to={`/${currentUser.id}`}>Profile</Link></li>
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
        <div className="main-header-left"><Link to="/about">About</Link></div>
        <Link id="logo" to="/">Channel</Link>
        <div className="main-header-right">
        {
          currentUser ?
          userMenu(props.logout, currentUser, props.ownPost) :
          sessionLinks()
        }
      </div>
      </div>
    </header>
  );
};

export default topLinks;

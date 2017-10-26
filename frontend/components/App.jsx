import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PostIndexContainer from './posts/post_index_container';
import PostShowContainer from './posts/post_show_container';
import PostFormContainer from './posts/post_form_container';
import HeaderContainer from './header/header_container';

const App = () => (
  <div className="main-container">
    <header className="main-inner-header">
      <div className="main-logo">
        <a id="logo" href="/">Channel</a>
      </div>
      <HeaderContainer />
    </header>
    <Switch>
      <Route exact path="/" component={PostIndexContainer}/>
      <Route exact path="/posts/:postId" component={PostShowContainer}/>
      <Route path="/posts/:postId/edit" component={PostFormContainer}/>
    </Switch>
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;

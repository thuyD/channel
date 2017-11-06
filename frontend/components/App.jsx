import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PostIndexContainer from './posts/post_index_container';
import PostShowContainer from './posts/post_show_container';
import PostFormContainer from './posts/post_form_container';
import HeaderContainer from './header/header_container';
import UserProfileContainer from './users/user_profile_container';

const App = () => (
  <div className="main-container">
    <Switch>
      <Route exact path="/posts/:postId" component={HeaderContainer} />
      <Route path="/" component={HeaderContainer} />
    </Switch>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />

    <Switch>
      <ProtectedRoute exact path="/:userId" component={UserProfileContainer} />
      <ProtectedRoute path="/posts/:postId/edit" component={PostFormContainer}/>
      <ProtectedRoute path="/posts/new" component={PostFormContainer}/>
      <Route exact path="/" component={PostIndexContainer}/>
      <Route exact path="/posts/:postId" component={PostShowContainer}/>
    </Switch>

  </div>
);

export default App;

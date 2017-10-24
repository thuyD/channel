import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';

const App = () => (
  <div>
    <header>
      <h1>I am Channeling...things</h1>
    </header>

    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;

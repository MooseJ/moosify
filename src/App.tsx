import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Callback from 'components/callback';
import { ProvideAuth } from 'contexts/auth';
import Login from 'components/login';
import Playback from 'components/playback';

function App() {
  return (
    <ProvideAuth>
      <Router>
          <Switch>
            <Route path="/callback">
              <Callback />
            </Route>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/playback">
              <Playback />
            </Route>
          </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;

/***
 * TODOS
 * 
 * - Stop using css inline
 * - Break down into more components. PlaybackControls for example.
 * - Work in UI/UX more
 * - Clean stuff up in general
 */

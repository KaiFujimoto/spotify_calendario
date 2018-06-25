import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import EventIndexContainer from './events/event_index_container';

const App = () => (
  <div>
    <div className = "user">
      <div>Welcome!</div>
      <div>Charlie Brown</div>
    </div>
    <h1 className = "heading">Spotify Calendario</h1>
    <div className = "calendar">
      <EventIndexContainer />
    </div>
  </div>
);

export default App;

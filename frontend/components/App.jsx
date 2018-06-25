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
    <h1>Spotify Calendario</h1>
    <EventIndexContainer />
  </div>
);

export default App;

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
  <div className = "main-page">
    <div className = "user">
      <div>Welcome!</div>
      <div>Charlie Brown <i className="fas fa-user-circle"></i></div>
    </div>
    <h1 className = "heading"> <i className="fab fa-spotify"></i> Spotify Calendario </h1>
    <div className = "line"></div>
    <div className = "calendar">
      <EventIndexContainer />
    </div>
  </div>
);

export default App;

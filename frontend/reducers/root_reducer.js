import { combineReducers } from 'redux';

import eventsReducer from './events_reducer';
import eventsErrorsReducer from './events_errors_reducer';

const rootReducer = combineReducers({
  events: eventsReducer,
  eventErrors: eventErrorsReducer
});

export default rootReducer;

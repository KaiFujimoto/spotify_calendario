import { combineReducers } from 'redux';

import eventReducer from './events_reducer';
import eventErrorsReducer from './events_errors_reducer';

const rootReducer = combineReducers({
  events: eventReducer,
  eventErrors: eventErrorsReducer
});

export default rootReducer;

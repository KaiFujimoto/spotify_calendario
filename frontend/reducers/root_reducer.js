import { combineReducers } from 'redux';

import eventReducer from './events_reducer';
import eventErrorsReducer from './events_errors_reducer';
import modalReducer from './modal_reducer.js';

const rootReducer = combineReducers({
  events: eventReducer,
  eventErrors: eventErrorsReducer,
  modal: modalReducer
});

export default rootReducer;

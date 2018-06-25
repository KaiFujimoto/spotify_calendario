import * as EventApiUtil from '../util/event_api_util';

export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveAllEvents = events => {
  return ({
    type: RECEIVE_ALL_EVENTS,
    events
  });
};

export const receiveEvent = event => {
  return ({
    type: RECEIVE_EVENT,
    event
  });
};

export const removeEvent = (eventId) => {
  return ({
    type: REMOVE_EVENT,
    eventId
  });
};

export const receiveEventErrors = (errors) => {
  return ({
    type: RECEIVE_EVENT_ERRORS,
    errors
  });
};

export const fetchEvents = () => {
  return dispatch => {
    return EventApiUtil.fetchEvents().then(event => {
      dispatch(receiveAllEvents(event));
    }, err => {
      return (
      dispatch(receiveEventErrors(err.responseJSON))
      );
    });
  };
};

export const fetchEvent = (eventId) => {
  return dispatch => {
    return EventApiUtil.fetchEvent(eventId).then(event => {
      dispatch(receiveEvent(event));
    }, err => {
        dispatch(receiveEventErrors(err.responseJSON));
    });
  };
};

export const createEvent = (data) => {
  return dispatch => {
    return EventApiUtil.createEvent(data).then(event => {
      dispatch(receiveEvent(event));
    }, err => {
      return (
        dispatch(receiveEventErrors(err.responseJSON))
      );
    });
  };
};

export const updateEvent = (eventId) => {
  return dispatch => {
    return EventApiUtil.updateEvent(eventId).then(event => {
      dispatch(receiveEvent(event));
    }, err => {
      dispatch(receiveEventErrors(err.responseJSON));
    });
  };
};

export const deleteEvent = (eventId) => {
  return dispatch => {

    return EventApiUtil.deleteEvent(eventId).then((event) => {
      dispatch(removeEvent(event.id));
    });
  };
};

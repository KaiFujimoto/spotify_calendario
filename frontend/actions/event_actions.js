import * as EventUtil from '../util/event_util';

export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveAllEvents = event => {

  return ({
    type: RECEIVE_ALL_EVENTS,
    event
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

export const fetchEvents = (userId) => {
  return dispatch => {
    return EventsApiUtil.fetchEvents(userId).then(event => {
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
    return EventsApiUtil.fetchEvent(eventId).then(event => {
      dispatch(receiveEvent(event));
    }, err => {
        dispatch(receiveEventErrors(err.responseJSON));
    });
  };
};

export const createEvent = (data) => {

  return dispatch => {
    return EventsApiUtil.createEvent(data).then(event => {
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
    return EventsApiUtil.updateEvent(eventId).then(event => {
      dispatch(receiveEvent(event));
    }, err => {
      dispatch(receiveEventErrors(err.responseJSON));
    });
  };
};

export const deleteEvent = (eventId) => {
  return dispatch => {

    return EventsApiUtil.deleteEvent(eventId).then((event) => {
      dispatch(removeEvent(event.id));
    });
  };
};

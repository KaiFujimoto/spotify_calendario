import { connect } from 'react-redux';
import React from 'react';
import { createEvent, clearErrors } from '../../../actions/event_actions';
import { withRouter } from 'react-router-dom';

import EventForm from './create_event_form';

const mapStateToProps = state => {
  return ({
    type: 'Create',
    errors: state.eventErrors,
  });
};

const mapDispatchToProps = dispatch => {

  return ({
    createEvent: (data) => dispatch(createEvent(data)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm));

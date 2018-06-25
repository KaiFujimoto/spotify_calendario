import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { fetchEvents } from '../../actions/event_actions';
import {openModal, closeModal} from '../../actions/modal_actions';

import EventIndex from './event_index';

const mapStateToProps = (state, ownProps) => {
  return ({
    events: Object.values(state.events),
    eventsHash: state.events
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchEvents: () => dispatch(fetchEvents()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex));

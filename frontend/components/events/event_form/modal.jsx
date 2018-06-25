import React from 'react';
import { closeModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import CreateEventFormContainer from './create_event_form_container';

function Modal({modal, props, closeModal}) {
  if (!modal) {
    return null;
  }
  let component = null;
  if (modal.type === 'create') {
      component = <CreateEventFormContainer event={props.event} day={modal.day}/>;
      return (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            { component }
          </div>
        </div>
      );
  } else {
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.modal,
    props: ownProps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

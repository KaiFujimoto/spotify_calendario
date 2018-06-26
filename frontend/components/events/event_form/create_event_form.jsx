import React from 'react';
import { withRouter } from 'react-router-dom';
import { hours, minutes, timeOfDay } from '../../../util/date_util';
import { merge } from 'lodash';

class CreateEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  eventAttributes() {
    const description = this.description.value;
    if (this.timeOfDay.value === "pm") {
      this.hours.value = (parseInt(this.hours.value) + 12).toString();
    }
    const start_date = `2018-06-${this.props.day}` + "T" + this.hours.value + ":" +
                this.minutes.value + ":" +
                "00";
    const end_date =  `2018-06-${this.props.day}` + "T" + this.hours.value + ":" +
                this.minutes.value + ":" +
                "00";
    return { description, start_date, end_date };
  }

  handleSubmit(e) {
    e.preventDefault();
    const event = this.eventAttributes();
    this.props.createEvent(event).then(() => {
      this.props.clearErrors();
      this.props.closeModal();
    });
  }

  validate() {
    return {
      description: this.description,
      start_date: this.start_date
    };
  }

  renderErrors() {
    return(
      <ul className='create-errors'>
        {this.props.errors.errors.map( (error, idx) => {
          return (
              <li key={idx}>
                {error}
              </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="create-form">
        <h1>{this.props.type} Event</h1>
        <form className="create-form-form" onSubmit={this.handleSubmit}>
          <div className="create-form-description">
              <input
                ref={(input) => this.description = input }
                placeholder="Description"
                type="text"
               />
          </div>
          <ul className="other-half-of-form">
            <li>
              <h5>Start Time</h5>
              <ul className="create-form-hours">
                <select
                  defaultValue='hours'
                  ref={input => this.hours = input}>
                  {hours}
                </select>
                <select
                  defaultValue='minutes'
                  ref={input => this.minutes = input}>
                  {minutes}
                </select>
                <select
                  defaultValue='am/pm'
                  ref={input => this.timeOfDay = input}>
                  {timeOfDay}
                </select>
              </ul>
              <h5>End Time</h5>
              <ul className="create-form-hours">
                  <select
                    defaultValue='hours'
                    ref={input => this.hours = input}>
                    {hours}
                  </select>
                  <select
                    defaultValue='minutes'
                    ref={input => this.minutes = input}>
                    {minutes}
                  </select>
                  <select
                    defaultValue='am/pm'
                    ref={input => this.timeOfDay = input}>
                    {timeOfDay}
                  </select>
              </ul>
              <button className='create-button' onClick={this.handleSubmit}>Create Event</button>
            </li>
            <ul>
              {this.props.errors.errors && this.props.errors.errors.length > 0 ? this.renderErrors() : ''}
            </ul>
          </ul>
        </form>
      </div>
    );
  }
}

export default CreateEventForm;

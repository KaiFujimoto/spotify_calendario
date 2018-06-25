import React from 'react';
import { withRouter } from 'react-router-dom';
import { days, monthsList, years } from '../../../util/date_util';
import { merge } from 'lodash';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  eventAttributes() {
    const description = this.description.value;
    const start_date = this.year.value + "-" +
                this.month.value + "-" +
                this.day.value;
    const end_date = this.year.value + "-" + this.month.value + "-" + this.day.value;
    return { description, start_date, end_date };
  }

  handleSubmit(e) {
    e.preventDefault();
    const event = this.eventAttributes();
    this.props.createEvent(event).then(() => {
      this.props.clearErrors();
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
      <ul className='sign-up-errors'>
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
      <div className="sign-up-form">
        <h1>{this.props.type} Event</h1>
        <form className="sign-up-form-form" onSubmit={this.handleSubmit}>
          <div className="sign-up-form-names">
              <input
                ref={(input) => this.description = input }
                placeholder="Description"
                type="text"
               />
          </div>
          <ul className="other-half-of-form">
            <li>
              <h5>Event Date</h5>
              <ul className="sign-up-form-birthdays">
                  <select
                    defaultValue='month'
                    ref={input => this.month = input}>
                    {monthsList}
                  </select>
                  <select
                    defaultValue='day'
                    ref={input => this.day = input}>
                    {days}
                  </select>
                  <select
                    defaultValue='year'
                    ref={input => this.year = input}>
                    {years}
                  </select>
              </ul>
              <button className='sign-up-button' onClick={this.handleSubmit}>Create Event</button>
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

export default EventForm;

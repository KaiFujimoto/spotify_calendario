import React from 'react';
import { withRouter } from 'react-router-dom';
import EventIndexItem from './event_index_item';
import { monthGenerator } from '../../util/date_util';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    if (this.props.events.length === 0) {
      return <li></li>;
    }

    const events = this.props.events;
    const eventsHash = this.props.eventsHash;
    const monthName = "June";
    const year = "2018";
    const months = monthGenerator(monthName, year);
    const daysWithEvents = events.map((event) => {
      return event.start_date.slice(8,10);
    });
    const hashOfEventDays = {};

    events.forEach((event) => {
      hashOfEventDays[event.start_date.slice(8,10)] = event.id;
    });

    const monthsList = months.map((date) => {
      const stringifiedDay = date.day.theDay.toString();
      // i want to match the month and see if the month is in my days with events thing.
      if (daysWithEvents.includes(stringifiedDay)) {

        return (
          <div className = "event-list-item" key={date.day.theDay}>
            <div>day of the week: {date.day.dayOfTheWeek}</div>
            <div>month: {date.day.theMonth}</div>
            <div>day: {date.day.theDay}</div>
            <div>description: {eventsHash[hashOfEventDays[stringifiedDay]].description}</div>
          </div>
        );
      } else {
        return (
          <div className = "event-list-item" key={date.day.theDay}>
            <div>day of the week: {date.day.dayOfTheWeek}</div>
            <div>month: {date.day.theMonth}</div>
            <div>day: {date.day.theDay}</div>
          </div>
        );
      }
    });
    return (
      <div>
        <h1>{year}</h1>
        <div className = "events-list">
          {monthsList}
        </div>
      </div>
    );
  }
}
export default EventIndex;

//
// const events = this.props.events.map( event => {
//   return (
//     <EventIndexItem
//       key={event.start_date.getDate()}
//       event={event}
//     />
//   );
// });

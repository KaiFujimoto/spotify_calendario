import React from 'react';
import { withRouter } from 'react-router-dom';
import EventIndexItem from './event_index_item';
import { monthGenerator } from '../../util/date_util';
import Modal from './event_form/modal';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    // NOTE: IF I HAVE TIME I WILL REFACTOR THIS LOOKS TERRIBLE I KNOW
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

    const daysOfWeekNames = {
      firstDay: null,
      secondDay: null,
      thirdDay: null,
      fourthDay: null,
      fifthDay: null,
      sixthDay: null,
      seventhDay: null
    };

    const monthsList = months.map((date) => {
      const stringifiedDay = date.day.theDay.toString();
      if (date.day.theDay <= 7) {
        switch (date.day.theDay) {
          case 1:
            daysOfWeekNames.firstDay = date.day.dayOfTheWeek;
            break;
          case 2:
            daysOfWeekNames.secondDay = date.day.dayOfTheWeek;
            break;
          case 3:
            daysOfWeekNames.thirdDay = date.day.dayOfTheWeek;
            break;
          case 4:
            daysOfWeekNames.fourthDay = date.day.dayOfTheWeek;
            break;
          case 5:
            daysOfWeekNames.fifthDay = date.day.dayOfTheWeek;
            break;
          case 6:
            daysOfWeekNames.sixthDay = date.day.dayOfTheWeek;
            break;
          case 7:
            daysOfWeekNames.seventhDay = date.day.dayOfTheWeek;
            break;
          default:

        }
      }
      if (daysWithEvents.includes(stringifiedDay)) {
        // i just want the weekdays for the first 7 everything else should fall in line
        if (date.day.theDay <= 7) {
          return (
            <div className = "event-list-item" key={date.day.theDay}>
              <button>Click To Add Event</button>
              <div className = "date-number">{date.day.theDay}</div>
              <div>description: {eventsHash[hashOfEventDays[stringifiedDay]].description}</div>
            </div>
          );
        } else {
          return (
            <div className = "event-list-item" key={date.day.theDay}>
              <button>Click To Add Event</button>
              <div className = "date-number">{date.day.theDay}</div>
              <div>description: {eventsHash[hashOfEventDays[stringifiedDay]].description}</div>
            </div>
          );
        }
      } else {
        if (date.day.theDay <= 7) {
          return (
            <div className = "event-list-item" key={date.day.theDay}>
              <button>Click To Add Event</button>
              <div className = "date-number">{date.day.theDay}</div>
            </div>
          );
        } else {
          return (
            <div className = "event-list-item" key={date.day.theDay}>
              <button>Click To Add Event</button>
              <div className = "date-number">{date.day.theDay}</div>
            </div>
          );
        }
      }
    });
    let daysOfWeekNamesArray = Object.values(daysOfWeekNames).map((name) => {
      return (
        <div className = "specific-date-name" key={name}>
          <div>{name}</div>
        </div>
      );
    });
    return (
      <div>
        <h1 className = "events-list">{monthName} {year}</h1>
        <Modal event={this.props.event} eventHash={this.props.eventHash}/>
        <div className = "events-list">
          <div className = "day-of-the-week-names">
            {daysOfWeekNamesArray}
          </div>
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

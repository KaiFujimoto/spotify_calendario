import React from 'react';
import { withRouter } from 'react-router-dom';
import EventIndexItem from './event_index_item';
import { monthGenerator, timeGenerator } from '../../util/date_util';
import Modal from './event_form/modal';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
    // this.iterateThroughEvents = this.iterateThroughEvents.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  handleCreate(e) {
    e.stopPropagation();
    this.props.openModal({type: 'create', day: e.currentTarget.id});
  }

  iterateThroughEvents(eventsHash, hashOfEventDays, stringifiedDay) {

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
      if (event.start_date.slice(5,7) === MONTH_NUMBERS[monthName]) {
        return event.start_date.slice(8,10);
      } else {
        return "100";
      }
    });
    const hashOfEventDays = {};
    events.forEach((event) => {
      if (event.start_date.slice(5,7) === MONTH_NUMBERS[monthName]){
        if (hashOfEventDays[event.start_date.slice(8,10)] === undefined) {
          hashOfEventDays[event.start_date.slice(8,10)] = [];
          hashOfEventDays[event.start_date.slice(8,10)].push(event.id);
        } else {
          hashOfEventDays[event.start_date.slice(8,10)].push(event.id);
        }
      }
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
      let stringifiedDay = date.day.theDay.toString();
      if (stringifiedDay.length < 2) {
        stringifiedDay = "0" + stringifiedDay;
      }
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
        let description = hashOfEventDays[stringifiedDay].map((id) => {
          return (
            <div key={id}>task: {eventsHash[id].description} start_time: {timeGenerator(eventsHash[id].start_date.slice(12, 16))}</div>
          );
        });
        if (date.day.theDay <= 7) {
          return (
            <div className = "event-list-item" key={date.day.theDay}>
              <button id = {date.day.theDay} onClick={this.handleCreate}>Click To Add Event</button>
              <div className = "date-number">{date.day.theDay}</div>
              <div>{description}</div>
            </div>
          );
        } else {
          return (
            <div className = "event-list-item" key={date.day.theDay}>
              <button id = {date.day.theDay} onClick={this.handleCreate}>Click To Add Event</button>
              <div className = "date-number">{date.day.theDay}</div>
              <div>{description}</div>
            </div>
          );
        }
      } else {
        if (date.day.theDay <= 7) {
          return (
            <div className = "event-list-item" key={date.day.theDay}>
              <button id = {date.day.theDay} onClick={this.handleCreate}>Click To Add Event</button>
              <div className = "date-number">{date.day.theDay}</div>
            </div>
          );
        } else {
          return (
            <div className = "event-list-item" key={date.day.theDay}>
              <button id = {date.day.theDay} onClick={this.handleCreate}>Click To Add Event</button>
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
        <Modal event={events} eventHash={this.props.eventsHash}/>
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
const MONTH_NUMBERS = {
  "January": "01",
  "February": "02",
  "March": "03",
  "April": "04",
  "May": "05",
  "June": "06",
  "July": "07",
  "August": "08",
  "Septempber": "09",
  "October": "10",
  "November": "11",
  "December": "12"
}

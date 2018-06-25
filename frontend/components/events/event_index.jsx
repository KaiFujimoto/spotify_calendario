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
    const monthName = "June";
    const year = "2018";
    const months = monthGenerator(monthName, year);
    const daysWithEvents = events.map((event) => {
      return event.start_date.slice(8,10);
    });
    debugger
    const monthsList = months.map((date) => {
      debugger
      // i want to match the month and see if the month is in my days with events thing.
      return (
        <div key={date.day.theDay}>
          <div>day of the week: {date.day.dayOfTheWeek}</div>
          <div>month: {date.day.theMonth}</div>
          <div>day: {date.day.theDay}</div>
        </div>
      );
    });
    return (
      <div>
        <div>{year}</div>
        {monthsList}
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

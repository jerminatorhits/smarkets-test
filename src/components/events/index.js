import PropTypes from 'prop-types';
import React from 'react';
import Event from './item';

export default class EventsContainer extends React.Component {

  renderEvents(events) {
    if (events != null) {
      return events.map(item => {
        return (
          <Event
            activate={this.props.setActiveEvent}
            key={item.id}
            id={item.id}
            name={item.name}
            url={item.url}
            activeEvent={this.props.activeEvent === item.id}
            onEventClick={this.onEventClick.bind(this)} />
        );
      });
    }
  }

  onEventClick(eventID) {
    this.props.setActiveEvent(eventID);
  }

  render() {
    return(
      <div className="navigation">
        <div className="header">Top Events</div>
        <ul>
          { this.renderEvents(this.props.events) }
        </ul>
      </div>
    );
  }
}

EventsContainer.propTypes = {
  events: PropTypes.array.isRequired,
  setActiveEvent: PropTypes.func.isRequired
}
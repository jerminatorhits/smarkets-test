import PropTypes from 'prop-types';
import React from 'react';

export default class Event extends React.Component {
  
  onClick() {
    this.props.onEventClick(this.props.id);
  }

  render() {
    return (
      <li onClick={this.onClick.bind(this)} className={this.props.activeEvent ? 'selected' : ''}>
        {this.props.name}
      </li>
    );
  }
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  activate: PropTypes.func.isRequired
}
import PropTypes from 'prop-types';
import React from 'react';

export default class Details extends React.Component {

  render() {
    return (
      <tr className="listing">
        <td className="scoreContainer">
          <p className="score">{this.props.name}</p>
        </td>
        <td className="titleContainer">
          <p className="detail">
            Event Type: {this.props.event_type}
          </p>
          <p className="detail">
            Parent Name: {this.props.parent_name}
          </p>
          <p className="detail">
            Description: {this.props.description}
          </p>
          <p className="detail">
            Start Time: {new Date(this.props.start_datetime).toString()}
          </p>
          <p className="detail">
            URL: <a href={this.props.url}>{this.props.url}</a>
          </p>
        </td>
      </tr>
    );
  }
}

Details.propTypes = {
  name: PropTypes.string.isRequired,
  event_type: PropTypes.string.isRequired,
  parent_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  start_datetime: PropTypes.string.isRequired, 
  url: PropTypes.string.isRequired
}

/*

parent_name={info.parent_name}
        event_type={info.event_type}
        description={info.description}
        start_datetime={info.start_datetime}
        info={info.info}
        url={info.url}

*/
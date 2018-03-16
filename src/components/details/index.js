import PropTypes from 'prop-types';
import React from 'react';
import Details from './item';

export default class DetailsContainer extends React.Component {

  renderDetails(details) {
    if (Object.keys(details).length !== 0) {
      const directURL = `https://www.smarkets.com/event/${details.id}${details.full_slug}`;
      return (
        <Details
          key={details.id}
          name={details.name}
          parent_name={details.parent_name}
          event_type={details.event_type}
          description={details.description}
          start_datetime={details.start_datetime}
          info={details.info}
          url={directURL} />
      );
    }
  }

  render() {
    return(
      <table>
        <tbody>
          { this.renderDetails(this.props.details) }
        </tbody>
      </table>
    );
  }
}

DetailsContainer.propTypes = {
  details: PropTypes.object.isRequired
}
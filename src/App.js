import React, { Component } from 'react';
import DetailsContainer from './components/details';
import EventsContainer from './components/events';
import { getPopularEvents, getEventInfo } from './utils/client';
import './stylesheet.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeEvent: '',
      events: [],
      details: {}
    }
  }

  componentDidMount() {
    getPopularEvents()
      .then(res => this.setState({ events: res.data.results }))
      .catch(err => console.log(err))
  }

  setActiveEvent(eventID) {
    getEventInfo(eventID)
      .then(res => {
          this.setState({
            details: res.data.event,
            activeEvent: eventID
          })
        })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <EventsContainer
          events={this.state.events}
          activeEvent={this.state.activeEvent}
          setActiveEvent={this.setActiveEvent.bind(this)}/>
        <DetailsContainer details={this.state.details} />
      </div>
    );
  }
}

export default App;

const axios = require('axios');

const FE_API = 'https://fe-api.smarkets.com/v0';

function getPopularEvents() {
  return axios.get(`${FE_API}/events/popular`);
}

function getEventInfo(eventID) {
	return axios.get(`${FE_API}/events/id/${eventID}`);
}

export { getPopularEvents, getEventInfo }
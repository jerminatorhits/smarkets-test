const axios = require('axios');

const SMARKETS_HOST = 'https://www.smarkets.com/v0';
const FE_API = 'https://fe-api.smarkets.com/v0';

function getPopularEvents() {
  return axios.get(`${FE_API}/events/popular`);
}

function getEventInfo(eventID) {
	return axios.get(`${FE_API}/events/id/${eventID}`);
}

function getSports(sportName) {
	return axios.get(`${SMARKETS_HOST}/listings/slug/sport/${sportName}/?period=upcoming`);
}

export { getPopularEvents, getEventInfo, getSports }
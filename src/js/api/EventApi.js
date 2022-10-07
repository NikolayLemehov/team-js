import axios from 'axios';

const eventAxios = axios.create({
  baseURL: 'https://app.ticketmaster.com/discovery/v2/',
  params: {
    apikey: 'EWGWF2UdExHGw0D6tj4sW6ARGH8R6i7m',
  },
});

export default class EventApi {
  #page = 1;
  countryCode;

  set page(page) {
    this.#page = page;
  }

  get page() {
    return this.#page;
  }

  fetchEvents(value, countryCode) {
    this.value = value ?? this.value;
    this.countryCode = countryCode ?? this.countryCode;
    const config = {
      params: {
        keyword: this.value,
        page: this.#page - 1,
        // countryCode: this.countryCode,
      },
    };
    return eventAxios.get('events.json', config);
  }

  fetchEvent(id) {
    const config = {
      params: {
        id,
      },
    };
    return eventAxios.get(`events/${id}.json`, config);
  }
}

// const eventApi = new EventApi();
// eventApi.fetchEvents('cat').then(console.log).catch(console.log)
// eventApi.fetchEvent('vvG1iZ95K_3K3Z').then(console.log).catch(console.log)

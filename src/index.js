import {EventApi} from "./js/api/EventApi";

const eventApi = new EventApi();

// eventApi.page++;
eventApi.fetchEvents('cat').then(console.log).catch(console.log)
// eventApi.fetchEvent('vvG1iZ95K_3K3Z').then(console.log).catch(console.log)
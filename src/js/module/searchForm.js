import {eventApi} from '../api/EventApi';
import {renderModal} from "./modal";
import {renderEventList} from "./renderEventList";
import {getEvents} from "../selectors/getEvents";

const formRef = document.querySelector('.search__form');

formRef.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();

  const {searchValue, countryCode} = e.target.elements
  const res = await eventApi.fetchEvents(searchValue.value, countryCode.value).catch(console.log)

  renderEventList(getEvents(res))
}


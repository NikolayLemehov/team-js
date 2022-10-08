import {eventApi} from '../api/EventApi';
import {renderEventList} from "./renderEventList";
import {getEvents} from "../selectors/getEvents";
import {countries} from "../variables/countries";

const formRef = document.querySelector('.search__form');
const selectRef = formRef.querySelector('select');

renderOptions(countries)
formRef.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();

  const {searchValue, countryCode} = e.target.elements
  const res = await eventApi.fetchEvents(searchValue.value, countryCode.value).catch(console.log)

  renderEventList(getEvents(res))
}

function renderOptions(arr) {
  const markup = arr.map(({code, name}) => (`<option value="${code}">${name}</option>`)).join('');
  selectRef.insertAdjacentHTML('beforeend', markup);
}


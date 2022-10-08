import debounce from 'lodash.debounce';
import {eventApi} from '../api/EventApi';

const DEBOUNCE_DELAY = 500;
// const eventApi = new EventApi();
console.log('eventApi', eventApi);

const refs = {
  inputSearch: document.querySelector('.search__input'),
  selectCountry: document.querySelector('.country__code'),
  addCard: document.querySelector('.card__add'),
};

// refs.inputSearch.addEventListener(
//   'input',
//   debounce(onInputSearch, DEBOUNCE_DELAY)
// );
//
// refs.selectCountry.addEventListener(
//   'input',
//   debounce(onInputCountry, DEBOUNCE_DELAY)
// );

function onInputSearch(event) {
  // event.preventDefault();
  console.log(event.target.value);
  eventApi.page = event.target;
  console.log('EventApi.page', eventApi.page);
}

export function getSearchCountryItemMarkup(data) {
  return `<div>searchCountryItemMarkup</div>`;
}

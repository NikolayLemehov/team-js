import debounce from 'lodash.debounce';
import {eventApi} from '../api/EventApi';

const DEBOUNCE_DELAY = 500;
// const eventApi = new EventApi();

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
  eventApi.page = event.target;
}

export function getSearchCountryItemMarkup(data) {
  return `<div>searchCountryItemMarkup</div>`;
}

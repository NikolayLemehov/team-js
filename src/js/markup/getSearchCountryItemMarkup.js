// import debounce from 'lodash.debounce';
import { eventApi } from '../api/EventApi';

// const DEBOUNCE_DELAY = 500;
// const eventApi = new EventApi();

const refs = {
  searchForm: document.querySelector('.search__form'),
  selectCountry: document.querySelector('.country__code'),
  addCard: document.querySelector('.card__add'),
};

// refs.searchForm.addEventListener('submit', onSearch);

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

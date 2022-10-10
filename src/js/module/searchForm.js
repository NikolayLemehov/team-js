import {countries} from "../variables/countries";
import { renderEventsWithPagination } from './renderEventsWithPagination';

const formRef = document.querySelector('.search__form');
const selectRef = formRef.querySelector('select');

renderOptions(countries)
formRef.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();

  const {searchValue, countryCode} = e.target.elements

  const startLoading = () => console.log('start form loading');
  const stopLoading = () => console.log('stop form loading');

  const renderData = {
    value: searchValue.value,
    countryCode: countryCode.value,
    startLoading,
    stopLoading
  }
  renderEventsWithPagination(renderData).catch(console.log)
}

function renderOptions(arr) {
  const markup = arr.map(({code, name}) => (`<option value="${code}">${name}</option>`)).join('');
  selectRef.insertAdjacentHTML('beforeend', markup);
}


import { countries } from '../variables/countries';
import { renderEventsWithPagination } from './renderEventsWithPagination';
import { Notify } from 'notiflix';

const formRef = document.querySelector('.form');
const selectRef = formRef.querySelector('select');

renderOptions(countries);
formRef.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();

  const { searchValue, countryCode } = e.target.elements;

  const renderData = {
    value: searchValue.value,
    countryCode: countryCode.value,
  }
  renderEventsWithPagination(renderData).catch(e => Notify.failure(e.message))
}

function renderOptions(arr) {
  const markup = arr
    .map(({ code, name }) => `<option value="${code}">${name}</option>`)
    .join('');
  selectRef.insertAdjacentHTML('beforeend', markup);
}

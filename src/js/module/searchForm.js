import { renderEventsWithPagination } from './renderEventsWithPagination';
import { Notify } from 'notiflix';

const formRef = document.querySelector('.search__form');

formRef.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();

  const {searchValue, countryCode} = e.target.elements

  const renderData = {
    value: searchValue.value,
    countryCode: countryCode.value,
  }
  renderEventsWithPagination(renderData).catch(e => Notify.failure(e.message))
}

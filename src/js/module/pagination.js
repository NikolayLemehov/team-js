import { getPaginationMarkup } from '../markup/getPaginationMarkup';
import { Pagination } from './Pagination.class';
import { eventApi } from '../api/EventApi';
import { removeChildren } from '../utils/removeChildren';

const paginationBoxRef = document.querySelector('.pagination-box__list');
console.log('paginationBoxRef', paginationBoxRef);
const pagination = new Pagination(11);
const data = pagination.change(1);
renderPagination(data);

paginationBoxRef.addEventListener('click', onPadinationBoxClick);

async function onPadinationBoxClick(e) {
  if (!e.target.dataset.btn) return;
  eventApi.page = Number(e.target.dataset.btn);
  await eventApi.fetchEvents();
  const data = pagination.change(eventApi.page);
  renderPagination(data);
}

function renderPagination(data) {
  removeChildren(paginationBoxRef);
  paginationBoxRef.insertAdjacentHTML('afterbegin', getPaginationMarkup(data));
}

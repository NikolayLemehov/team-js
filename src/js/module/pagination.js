import { getPaginationMarkup } from '../markup/getPaginationMarkup';
import { pagination } from './Pagination.class';
import { eventApi } from '../api/EventApi';
import { removeChildren } from '../utils/removeChildren';
import { renderEventList } from './renderEventList';
import { getEvents } from '../selectors/getEvents';
import { renderEventsWithPagination } from './renderEventsWithPagination';

const paginationBoxRef = document.querySelector('.pagination');
const paginationLoader = document.querySelector('.spinner');

paginationBoxRef.addEventListener('click', onPaginationBoxClick);

async function onPaginationBoxClick(e) {
  const clickedEl = e.target;
  if (!clickedEl.dataset.btn) return;
  if (clickedEl.classList.contains('pagination__btn--current')) return;

  eventApi.page = Number(clickedEl.dataset.btn);

  const startLoading = () => {
    // clickedEl.classList.add('clicked');
    paginationBoxRef.classList.add('visually-hidden');
    paginationLoader.classList.remove('visually-hidden');
  };
  const stopLoading = () => {
    setTimeout(() => {
      paginationBoxRef.classList.remove('visually-hidden');
      paginationLoader.classList.add('visually-hidden');
    }, 250);
  };

  const renderData = {
    page: eventApi.page,
    startLoading,
    stopLoading,
  };
  renderEventsWithPagination(renderData).catch(console.log);
}

export function renderPagination(data) {
  removeChildren(paginationBoxRef);
  paginationBoxRef.insertAdjacentHTML('beforeend', getPaginationMarkup(data));
}

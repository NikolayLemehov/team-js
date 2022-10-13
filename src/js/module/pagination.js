import { getPaginationMarkup } from '../markup/getPaginationMarkup';
import { eventApi } from '../api/EventApi';
import { removeChildren } from '../utils/removeChildren';
import { renderEventsWithPagination } from './renderEventsWithPagination';
import { Notify } from 'notiflix';

const paginationBoxRef = document.querySelector('.pagination');
const paginationLoader = document.querySelector('.spinner');

paginationBoxRef.addEventListener('click', onPaginationBoxClick);

async function onPaginationBoxClick(e) {
  const clickedEl = e.target;
  if (!clickedEl.dataset.btn) return;
  if (clickedEl.classList.contains('pagination__btn--current')) return;

  eventApi.page = Number(clickedEl.dataset.btn);

  const startLoading = () => {
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
  await renderEventsWithPagination(renderData).catch(e => Notify.failure(e.message));
  window.scroll(0, 0)
}

export function renderPagination(data) {
  removeChildren(paginationBoxRef);
  paginationBoxRef.insertAdjacentHTML('beforeend', getPaginationMarkup(data));
}

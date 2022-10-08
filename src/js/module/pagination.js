import { getPaginationMarkup } from '../markup/getPaginationMarkup';
import {pagination, Pagination} from './Pagination.class';
import { eventApi } from '../api/EventApi';
import { removeChildren } from '../utils/removeChildren';
import {renderEventList} from "./renderEventList";
import {getEvents} from "../selectors/getEvents";

const paginationBoxRef = document.querySelector('.pagination-box');

// const pagination = new Pagination();
// pagination.total = 11;
// const data = pagination.change(1);
// renderPagination(data);

paginationBoxRef.addEventListener('click', onPaginationBoxClick);

async function onPaginationBoxClick(e) {
  if (!e.target.dataset.btn) return;

  eventApi.page = Number(e.target.dataset.btn);

  const res = await eventApi.fetchEvents().catch(console.log);
  const data = pagination.change(eventApi.page);

  renderEventList(getEvents(res))
  renderPagination(data);
}

export function renderPagination(data) {
  removeChildren(paginationBoxRef);
  paginationBoxRef.insertAdjacentHTML('afterbegin', getPaginationMarkup(data));
}

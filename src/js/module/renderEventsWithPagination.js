import {renderEventList} from "./renderEventList";
import {renderPagination} from "./pagination";
import {eventApi} from "../api/EventApi";
import {getEvents} from "../selectors/getEvents";
import {pagination} from "./Pagination.class";
import { setLoading } from '../utils/setLoading';

export async function renderEventsWithPagination(data) {
  const fn = () => {};
  const {value, countryCode, startLoading = fn, stopLoading = fn} = data || {}

  const asyncCb = () => eventApi.fetchEvents(value, countryCode);
  const res = await setLoading(asyncCb, startLoading, stopLoading)

  renderEventList(getEvents(res))

  pagination.total = eventApi.total;
  const paginationData = pagination.change(1);
  renderPagination(paginationData);
}

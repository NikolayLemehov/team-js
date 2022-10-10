import {renderEventList} from "./renderEventList";
import {renderPagination} from "./pagination";
import {eventApi} from "../api/EventApi";
import {getEvents} from "../selectors/getEvents";
import {pagination} from "./Pagination.class";

export async function renderEventsWithPagination(value, countryCode) {
  const res = await eventApi.fetchEvents(value, countryCode);
  renderEventList(getEvents(res))

  if (eventApi.total > 1) {
    pagination.total = eventApi.total;
    const data = pagination.change(1);
    renderPagination(data);
  }
}

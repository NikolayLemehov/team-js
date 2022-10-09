import {removeChildren} from "../utils/removeChildren";
import { getCardListMarkup } from "../markup/getCardListMarkup";
import { eventApi } from "../api/EventApi";

const cardListRef = document.querySelector('.card-list');

eventApi.fetchEvents().then(e => renderEventList(e.data._embedded.events));

export function renderEventList(data) {
  removeChildren(cardListRef);
  cardListRef.insertAdjacentHTML('beforeend', getCardListMarkup(data))
}
import {removeChildren} from "../utils/removeChildren";
import { getCardListMarkup } from "../markup/getCardListMarkup";

const cardListRef = document.querySelector('.card__list');

export function renderEventList(data) {
  removeChildren(cardListRef);
  cardListRef.insertAdjacentHTML('beforeend', getCardListMarkup(data))
  window.dispatchEvent(new CustomEvent('eventListRenderFinished',
    {detail: {containerRef: cardListRef}}));
}
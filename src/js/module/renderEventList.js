import {removeChildren} from "../utils/removeChildren";
import { getCardListMarkup } from "../markup/getCardListMarkup";

const cardListRef = document.querySelector('.card-list');

export function renderEventList(data) {
  removeChildren(cardListRef);
  cardListRef.insertAdjacentHTML('beforeend', getCardListMarkup(data))
}
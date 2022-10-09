import { getCardMarkup } from "./getCardMarkup";

export function getCardListMarkup(array) {
  return array.map(card => getCardMarkup(card)).join('');
  }
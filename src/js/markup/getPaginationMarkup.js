import { getPaginationItemMarkup } from './getPaginationItemMarkup';

export function getPaginationMarkup(arr) {
  return arr.map(el => getPaginationItemMarkup(el)).join('');
}

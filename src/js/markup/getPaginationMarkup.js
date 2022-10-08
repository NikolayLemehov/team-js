import { getPaginationItemMarkup } from './getPaginationItemMarkup';
export function getPaginationMarkup(arr) {
  console.log(arr);
  return arr.map(el => getPaginationItemMarkup(el)).join('');
}

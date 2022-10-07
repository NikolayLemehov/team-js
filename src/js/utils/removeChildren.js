export function removeChildren(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}
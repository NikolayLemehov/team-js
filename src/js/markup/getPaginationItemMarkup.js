export function getPaginationItemMarkup(data) {
  const { value, isBtn, isCurrent } = data;
  const currentClass = isCurrent ? ' pagination__btn--currnt' : '';
  return `      
  <li>
    ${
      isBtn
        ? `<button class="button pagination__btn${currentClass}" data-btn="${value}">${value}</button>`
        : `<span class="pagination__btn">${value}</span>`
    }
   
  </li>
  `;
}

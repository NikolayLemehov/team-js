
const iconLocation = `<svg class="event__icon" viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2 0c-6.176 0-11.2 4.99-11.2 11.123 0 7.709 11.211 20.877 11.211 20.877s11.189-13.547 11.189-20.877c0-6.133-5.024-11.123-11.2-11.123zM14.579 14.38c-0.932 0.925-2.155 1.388-3.379 1.388s-2.448-0.463-3.379-1.388c-1.863-1.85-1.863-4.861 0-6.712 0.902-0.896 2.103-1.39 3.379-1.39s2.477 0.494 3.379 1.39c1.863 1.851 1.863 4.862 0 6.712z" fill="white"/>
</svg>`

export function getCardListMarkup(array) {
  const cardList = document.querySelector('.card-list')
  const cards = array.map(card => {
    return `<li class="card__item" data-id="${card.id}">
          <a href="" class="card__link">
            <div class="card__thumb">
              <img src="${card.images[4].url}" alt="card" class="card__img" width="267" height="220">
            </div>
          </a>
          <div class="event__info">
            <a href="" class="event__artist">${card.name}</a>
            <p class="event__data">${card.dates.start.localDate}</p>
            <a class="event__address" href="">
              ${iconLocation}${card._embedded.venues[0].name}</a>
          </div>
        </li>`
  }).join('')
  cardList.insertAdjacentHTML('beforeend', cards);
  }
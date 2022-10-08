export function getCardMarkup(data) {
  return `<li class="card__item" data-id="${data.id}">
          <a href="${data.url}" class="card__link">
            <div class="card__thumb">
              <img src="${data.images[4].url}" alt="card">
            </div>
          </a>
          <div class="event__info">
            <h2 class="event__artist">${data.name}</h2>
            <p class="event__data">${data.dates.localDate}</p>
            <a class="event__address" href="">
              <svg class="event__icon">
                <use href="./images/symbol-defs.svg#locationVector">
                </use>
              </svg>${data._embedded.venues[0].name}</a>
          </div>
        </li>`
}
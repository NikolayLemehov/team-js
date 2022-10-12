import symbolDefs from '../../images/symbol-defs.svg'

export function getCardMarkup(data) {
  return `<li class="card__item" data-id="${data.id}">
          <a href="" class="card__link">
            <div class="card__thumb">
              <img src="${data.images[4].url}" alt="card" width="267" height="220" class="card__img">
            </div>
          </a>
          <div class="card__info">
            <h2 class="card__artist">${data.name}</h2>
            <p class="card__data">${data.dates.start.localDate}</p>
            <a class="card__address" href="">
              <svg class="card__icon" width="22" height="32">
                <use href="${symbolDefs}#locationVector"></use>
              </svg>${data._embedded.venues[0].name}
            </a>
          </div>
        </li>`
}
import symbolDefs from '../../images/symbol-defs.svg';
import defaultImg from '../../images/no-found-image.png';

const MIN_IMG_WIDTH = 267;

function getNormSize(images = []) {
  if (images.length === 0) return defaultImg;
  const newImages = images.filter(it => it.ratio === '3_2');
  newImages.sort((a, b) => b.width - a.width);
  return newImages.find(it => it.width > MIN_IMG_WIDTH).url;
}

export function getCardMarkup(data) {
  const imgUrl = getNormSize(data.images);

  return `<li class="card__item" data-id="${data.id}">
          <a href="" class="card__link">
            <div class="card__thumb">
              <img src="${imgUrl}" alt="card" width="267" height="220" class="card__img">
            </div>
          </a>
          <div class="card__info">
            <h2 class="card__artist">${data.name}</h2>
            <p class="card__data">${data.dates.start.localDate}</p>
            <a class="card__address" href="https://www.google.com/maps/dir/?api=1&destination=${data._embedded.venues[0].location.latitude},${data._embedded.venues[0].location.longitude}">
              <svg class="card__icon" width="22" height="32">
                <use href="${symbolDefs}#locationVector"></use>
              </svg>${data._embedded.venues[0].name}
            </a>
          </div>
        </li>`;
}

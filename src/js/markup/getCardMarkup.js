import symbolDefs from '../../images/symbol-defs.svg';
import defaultImg from '../../images/no-found-image.png';
import { getData } from '../utils/getData';

const MIN_IMG_WIDTH = 267;

function getNormSize(images = []) {
  if (images.length === 0) return defaultImg;
  const newImages = images.filter(it => it.ratio === '3_2' || it.ratio === '4_3');
  newImages.sort((a, b) => b.width - a.width);
  return newImages.find(it => it.width > MIN_IMG_WIDTH).url;
}

export function getCardMarkup(data) {
  const imgUrl = getNormSize(data.images);
  const localDate = getData(() => data.dates.start.localDate, 'No date')
  const latitude = getData(() => data._embedded.venues[0].location.latitude);
  const longitude = getData(() => data._embedded.venues[0].location.longitude);
  const href = latitude && longitude ? `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}` : '';
  const venuesName = getData(() => data._embedded.venues[0].name)

  return `<li class="card__item" data-id="${data.id}">
            <a href="" class="card__link">
              <div class="card__thumb loading-box">

                <img src="${imgUrl}" data-large="${imgUrl}" alt="${data.name}"
                  width="267" height="220"
                  class="card__img loading-box__img loading-box__img--small" loading="lazy">
              </div>
            </a>
            <div class="card__info">
              <h2 class="card__artist">${data.name}</h2>
              <p class="card__data">${localDate}</p>
              ${latitude && longitude ?
                `<a class="card__address" href="${href}">
                  <svg class="card__icon" width="22" height="32">
                    <use href="${symbolDefs}#locationVector"></use>
                  </svg>${venuesName} triam
                </a>` : ''
              }
            </div>
          </li>`;
}

import { Notify } from 'notiflix';
import defaultImg from '../../images/no-found-image.png';

function makeFirstLetterBig(string) {
  if (string !== undefined) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else return isExists;
}

function isExists(
  cb,
  text = 'Sorry, we can&#8217;t find that information 💁🏻‍♂️🙁Check back later'
) {
  try {
    if (!cb()) return text;
    return cb();
  } catch {
    return text;
  }
}

// function isExistsImg(cb) {
//   const url = defaultImg;
//   try {
//     if (!cb()) return url;
//     return cb();
//   } catch {
//     return url;
//   }
// }

function getBiggestSmallImg(images = []) {
  if (images.length === 0) return defaultImg;
  const newImages = images.filter(it => it.ratio === '4_3');
  newImages.sort((a, b) => b.width - a.width);
  return newImages[0].url;
}

function getBiggestBigImg(images = []) {
  if (images.length === 0) return defaultImg;
  const newImages = images.filter(it => it.ratio === '16_9');
  newImages.sort((a, b) => b.width - a.width);
  return newImages[0].url;
}

export function getEventModalMarkup(data) {
  const { images, info, dates, _embedded, priceRanges } = data;

  //images
  const imgUrl = getBiggestBigImg(images);
  const imgUrlSmall = getBiggestSmallImg(images);

  //info
  const infoCheck = isExists(() => info);

  //when
  const localDate = isExists(() => dates.start.localDate);
  const localTime = isExists(() => dates.start.localTime);
  const timezone = isExists(() => dates.timezone);

  //where
  const country = isExists(() => _embedded.venues[0].country.name);
  const city = isExists(() => _embedded.venues[0].city.name);
  const place = isExists(() => _embedded.venues[0].name);

  //who
  const who = isExists(() => _embedded.attractions[0].name);

  //price standard

  const standardPrice = standardPricee(priceRanges);

  //price VIP
  const checkVipExists = priceRanges
    ? priceRanges.findIndex(option => option.type === 'VIP')
    : '';

  function isExistsCheckVip() {
    return checkVipExists > 0
      ? `<p class="modal__text">${priceRanges[1].type} ${priceRanges[1].min}-${priceRanges[1].max} ${priceRanges[1].currency}</p><div class="modal__buyTicketsBtn">
          <button class="modal__btnBlue" type="button">
            BUY TICKETS
          </button>
        </div>`
      : '';
  }

  const vipPrice = isExistsCheckVip();

  return `
      <div class="modal__header">
        <img
          class="modal__img"
          src="${imgUrlSmall}"
          alt="${who}"
          height="132px"
        />
      </div>
      <div class="modal__mainPart">
        <div class="modal__textRight1">
          <img
            class="modal__imgBig"
            src="${imgUrl}"
            alt="${who}"
            width="427px"
            height="326px"
          />
          <h2 class="modal__title">INFO</h2>
          <p class="modal__text">${infoCheck}</</p>
          <h2 class="modal__title">WHEN</h2>
          <p class="modal__textMini">${localDate}</p>
          <p class="modal__text">${localTime}(${timezone})</p>
          <div>
            <h2 class="modal__title">WHERE</h2>
            <p class="modal__textMini">${city}, ${country} </p>
            <p class="modal__text">${place}</p>
          </div>
          <div class="modal__whoSection">
            <h2 class="modal__title">WHO</h2>
            <p class="modal__text">${who}</p>
          </div>
        </div>
        <div class="modal__priceSection">
          <h2 class="modal__title">PRICES</h2>
          <div class="modal__priceAndBtn">
            <div>
              ${standardPrice}
            </div>
            <div class="modal__vipPrice">
              ${vipPrice}

            </div>
          </div>
        </div>
      </div>
`;
}

function standardPricee(priceRanges) {
  if (!priceRanges) return '';
  const priceStandardType = makeFirstLetterBig(
    isExists(() => priceRanges[0].type, '')
  );
  const min = priceRanges[0].min;
  const max = priceRanges[0].max;
  const currency = priceRanges[0].currency;

  const text = priceStandardType
    ? `<p class="modal__text">${priceStandardType} ${min}-${max} ${currency}</p><div class="modal__buyTicketsBtn">
        <button class="modal__btnBlue" type="button">
          BUY TICKETS
        </button>
      </div>`
    : '';
}

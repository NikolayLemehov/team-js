function makeFirstLetterBig(string) {
  if (string !== undefined) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else return ifItsExists;
}

function ifItsExists(cb) {
  const text =
    'Sorry, we can&#8217;t find that information 💁🏻‍♂️🙁Better call Soul📱';
  try {
    if (!cb()) return text;
    return cb();
  } catch {
    return text;
  }
}
const defaultImg =
  'https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg';

// function ifItsExistsImg(cb) {
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
  console.log(data);
  const { images, info, dates, _embedded, priceRanges } = data;

  //images
  const imgUrl = getBiggestBigImg(images);
  const imgUrlSmall = getBiggestSmallImg(images);

  //info
  const infoCheck = ifItsExists(() => info);

  //when
  const localDate = ifItsExists(() => dates.start.localDate);
  const localTime = ifItsExists(() => dates.start.localTime);
  const timezone = ifItsExists(() => dates.timezone);

  //where
  const country = ifItsExists(() => _embedded.venues[0].country.name);
  const city = ifItsExists(() => _embedded.venues[0].city.name);
  const place = ifItsExists(() => _embedded.venues[0].name);

  //who
  const who = ifItsExists(() => _embedded.attractions[0].name);

  //price standard
  const priceStandardType = makeFirstLetterBig(priceRanges[0].type);

  function standardPricee() {
    return priceStandardType
      ? `<p class="modal__text">${priceStandardType} ${priceRanges[0].min}-${priceRanges[0].max} ${priceRanges[0].currency}</p><div class="modal__buyTicketsBtn">
        <button class="modal__btnBlue" type="button">
          BUY TICKETS
        </button>
      </div>`
      : '';
  }

  const standardPrice = standardPricee();

  //price VIP
  const checkVipExists = priceRanges.findIndex(option => option.type === 'VIP');

  function ifItsExistsCheckVip() {
    return checkVipExists < 0
      ? ''
      : `<p class="modal__text">${priceRanges[1].type} ${priceRanges[1].min}-${priceRanges[1].max} ${priceRanges[1].currency}</p><div class="modal__buyTicketsBtn">
          <button class="modal__btnBlue" type="button">
            BUY TICKETS
          </button>
        </div>`;
  }

  const vipPrice = ifItsExistsCheckVip();

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

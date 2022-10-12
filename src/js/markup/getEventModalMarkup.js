import { Notify } from 'notiflix';

function makeFirstLetterBig(string) {
  if (string !== undefined) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else return false;
}

function ifItsExists(value) {
  if (value !== undefined) {
    return value;
  } else {
    return Notify.warning('hey'), 'no information';
  }
}

export function getEventModalMarkup(data) {
  const { images, info, dates, _embedded, priceRanges } = data;
  const imgUrl = images[2].url;
  const imgUrlSmall = images[8].url;

  //when
  const localDate = dates.start.localDate;
  const localTime = dates.start.localTime;
  const timezone = dates.timezone;

  //where
  const country = _embedded.venues[0].country.name;
  const city = _embedded.venues[0].city.name;
  const place = _embedded.venues[0].name;

  //who
  //проблема, когда нету данных - то модалка не работает. Например, поиск события Hey
  const who = ifItsExists(_embedded.attractions[0].name);

  //price standard
  const priceStandardType = makeFirstLetterBig(priceRanges[0].type);

  function standardPricee() {
    if (priceStandardType) {
      return `<p class="modal__text">${priceStandardType} ${priceRanges[0].min}-${priceRanges[0].max} ${priceRanges[0].currency}</p><div class="modal__buyTicketsBtn">
                <button class="modal__btnBlue" type="button">
                  BUY TICKETS
                </button>
              </div>`;
    } else '';
  }

  const standardPrice = standardPricee();

  //price VIP

  const checkVipExists = priceRanges.findIndex(option => option.type === 'VIP');

  function ifItsExistsCheckVip() {
    if (checkVipExists < 0) {
      return '';
    } else
      return `<p class="modal__text">${priceRanges[1].type} ${priceRanges[1].min}-${priceRanges[1].max} ${priceRanges[1].currency}</p><div class="modal__buyTicketsBtn">
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
          alt="The Black Eyed Peas"
          height="132px"
        />
      </div>
      <div class="modal__mainPart">
        <div class="modal__textRight1">
          <img
            class="modal__imgBig"
            src="${imgUrl}"
            alt="The Black Eyed Peas"
            width="427px"
            height="326px"
          />

          <h2 class="modal__title">INFO</h2>
          <p class="modal__text">${info}</</p>

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

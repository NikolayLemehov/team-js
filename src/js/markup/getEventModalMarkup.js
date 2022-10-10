export function getEventModalMarkup(data) {
  const { images, info, dates, _embedded, priceRanges } = data;
  const imgUrl = images[3].url;
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
  const who = _embedded.attractions[0].name;
  //price
  const priceStandartType = priceRanges[0].type;
  const priceStandartMin = priceRanges[0].min;
  const priceStandartMax = priceRanges[0].max;
  const priceCurrency = priceRanges[0].currency;

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
              <p class="modal__text">${priceStandartType} ${priceStandartMin}-${priceStandartMax} ${priceCurrency}</p>
              <div class="modal__buyTicketsBtn">
                <button class="modal__btnBlue" type="button">
                  BUY TICKETS
                </button>
              </div>
            </div>
            <div class="modal__vipPrice">
              <p class="modal__text">VIP 1000-1500 UAH</p>
              <div class="modal__buyTicketsBtn">
                <button class="modal__btnBlue" type="button">
                  BUY TICKETS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

`;
}

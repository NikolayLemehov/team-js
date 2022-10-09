export function getEventModalMarkup(data) {
  const { name, images, info, dates, promoter, products } = data;
  const imgUrl = images[1].url;
  const localDate = dates.start.localDate;
  const localTime = dates.start.localTime;
  const timezone = dates.timezone;
  // const productsName = products[0].name;

  // const getEvents = res => res.data['_embedded']['events'];

  return `

      <div class="modal__header">
        <img
          class="modal__img"
          src="${imgUrl}"
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
            height="326px"
          />

          <h2 class="modal__title">INFO</h2>
          <p class="modal__text">${info}</</p>

          <h2 class="modal__title">WHEN</h2>
          <p class="modal__textMini">">${localDate} ${localTime} </p>
          <p class="modal__text">(${timezone})</p>
          <div>
            <h2 class="modal__title">WHERE</h2>
            <p class="modal__textMini">">${promoter} </p>
            <p class="modal__text">${promoter}</p>
          </div>
          <div class="modal__whoSection">
            <h2 class="modal__title">WHO</h2>
            <p class="modal__text">">${name}</p>
          </div>
        </div>
        <div class="modal__priceSection">
          <h2 class="modal__title">PRICES</h2>
          <div class="modal__priceAndBtn">
            <div>
              <p class="modal__text">Standart 300-500 UAH</p>
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
      <div class="modal__lastBtn">
        <button class="modal__btnAuthor" type="button">
          MORE FROM THIS AUTHOR
        </button>
      </div>
`;
}

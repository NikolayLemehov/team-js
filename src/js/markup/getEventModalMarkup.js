export function getEventModalMarkup(data) {
  const { id } = data;
  console.log(data);
  console.log(data.data.images[1].url);
  return `
  <div class="modal__header">
      <img
        class="modal__img"
        src="${data.data.images[1].url}"
        alt="The Black Eyed Peas"
        height="132px"
      />
    </div>
    <div class="modal__mainPart">
      <div class="modal__big-img">
        <img
          class="modal__imgBig"
          src="${data.data.images[1].url}"
          alt="The Black Eyed Peas"
          height="326px"
        />
      </div>
      <div class="modal__right-text">
        <div>
          <h2 class="modal__title">INFO</h2>
          <p class="modal__text">${data.data.info}</p>
        </div>
        <div>
          <h2 class="modal__title">WHEN</h2>
          <p class="modal__text">${data.data.dates.start.localDate} ${data.data.dates.start.localTime} (${data.data.dates.timezone})</p>
        </div>
        <div>
          <h2 class="modal__title">WHERE</h2>
          <p class="modal__text">${data.data.promoter.description} ${data.data.products[0].name}</p>
        </div>
      </div>
    </div>
    <div class="modal__bottomText">
      <h2 class="modal__title">WHO</h2>
      <p class="modal__text">${data.data.name}</p>
      <div class="modal__priceSection">
        <h2 class="modal__title">PRICES</h2>
        <div class="modal__priceAndBtn">
          <div>
            <p class="modal__text">Standart 300-500 UAH</p>
            <div class="modal__buyTicketsBtn">
              <button class="modal__btnBlue" type="button">BUY TICKETS</button>
            </div>
          </div>
          <div class="modal__vipPrice">
            <p class="modal__text">VIP 1000-1500 UAH</p>
            <div class="modal__buyTicketsBtn">
              <button class="modal__btnBlue" type="button">BUY TICKETS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal__lastBtn">
      <button class="modal__btnAuthor" type="button">
        MORE FROM THIS AUTHOR
      </button>
    </div>`;
}

import img from '../../images/select/arrow.svg';

const getTemplate = (data = [], placeholder) => {
  const text = placeholder;

  const items = data.map((item, i) => {
    return `
    <li class="select__item " data-type="item" data-code="${
      item.code
    }" data-id="${i + 1}">${item.name}</li>
    `;
  });

  const options = data
    .map(({ code, name }) => `<option value="${code}">${name}</option>`)
    .join('');

  return `
  <div class="select__backdrop" data-type="backdrop"></div>
  <div class="select__input" data-type="input">
    <select class="visually-hidden" name="countryCode">
      <option value="" selected disabled hidden>Choose country</option>
      ${options}
    </select>
    <span class="select__name" data-type="name">${text}</span>
    <span class="select__img-wrap" data-type="arrow">
      <img src="${img}" width="14" alt="icon">
    </span>
  </div>
  <div class="select__dropdown">
    <ul class="select__list">
      ${items.join('')}
    </ul>
  </div>`;
};

const initOptions = {
  placeholder: 'placeholder',
  data: [],
}

export class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.options = { ...initOptions, ...options  };
    this.selectedCode = null;

    this.#render();
    this.#setup();
  }

  #render() {
    const { placeholder, data } = this.options;
    this.$el.classList.add('select');
    this.$el.innerHTML = getTemplate(data, placeholder);
  }

  #setup() {
    this.$el.addEventListener('click', this.clickHandler);
    this.$nativeSelect = this.$el.querySelector('[name="countryCode"]');
    this.$arrow = this.$el.querySelector('[data-type="arrow"]');
    this.$name = this.$el.querySelector('[data-type="name"]');
    this.optionList = [
      {code: '', name: this.options.placeholder},
      ...this.options.data
    ]
  }

  clickHandler = (event) => {
    const { type } = event.target.dataset;

    if (type === 'input') {
      this.toggle();
    } else if (type === 'item') {
      const code = event.target.dataset.code;
      const index = event.target.dataset.id;
      this.select(code, index);
    } else if (type === 'backdrop') {
      this.close();
    }
  }

  get isOpen() {
    return this.$el.classList.contains('open');
  }

  get current() {
    return this.optionList.find(item => item.code === this.selectedCode);
  }

  reset() {
    this.$nativeSelect.selectedIndex = 1;
    this.selectedCode = '';
    this.$name.textContent = this.optionList[1].name;
    this.$el.querySelectorAll('[data-type="item"]').forEach(el => {
      el.classList.remove('selected');
    });

    this.options.onSelect ? this.options.onSelect(this.current) : null;
  }

  select(code, index) {
    this.$nativeSelect.selectedIndex = index;
    this.selectedCode = code;
    this.$name.textContent = this.current.name;
    this.$name.classList.add('selected');
    this.$el.querySelectorAll('[data-type="item"]').forEach(el => {
      el.classList.remove('selected');
    });
    this.$el.querySelector(`[data-code=${code}]`).classList.add('selected');

    this.options.onSelect ? this.options.onSelect(this.current) : null;

    this.close();
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.$el.classList.add('open');
    this.$arrow.classList.add('rotate');
  }

  close() {
    this.$el.classList.remove('open');
    this.$arrow.classList.remove('rotate');
  }

  destroy() {
    this.$el.removeEventListener('click', this.clickHandler);
    this.$el.innerHTML = '';
  }
}

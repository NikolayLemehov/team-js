export class Pagination {
  #maxTotal = 49;
  #near = 4;
  #age = 1;
  #total = null;

  set total(value) {
    this.#total = value < this.#maxTotal ? value : this.#maxTotal;
  }

  get total() {
    return this.#total;
  }

  change(num) {
    const arr = [];

    let min = num - this.#near;
    min = min < 1 ? 1 : min;

    let max = Math.max(num + this.#near, this.#age);
    max = max > this.#total ? this.#total : max;

    for (let i = min; i <= max; i++) {
      const isCurrent = num === i;

      arr.push({ value: i, isCurrent, isBtn: true });
    }

    if (min > this.#age + 2) {
      arr.unshift({ value: '...', isCurrent: false, isBtn: false });
      for (let i = this.#age; i > 0; i--) {
        arr.unshift({ value: i, isCurrent: false, isBtn: true });
      }
    } else {
      for (let i = min - 1; i > 0; i--) {
        const isCurrent = num === i;
        arr.unshift({ value: i, isCurrent, isBtn: true });
      }
    }

    if (max < this.#total - this.#age - 1) {
      arr.push({ value: '...', isCurrent: false, isBtn: false });
      for (let i = this.#total - this.#age + 1; i <= this.#total; i++) {
        arr.push({ value: i, isCurrent: false, isBtn: true });
      }
    } else {
      for (let i = max + 1; i <= this.#total; i++) {
        const isCurrent = num === i;
        arr.push({ value: i, isCurrent, isBtn: true });
      }
    }
    return arr;
  }
}

export const pagination = new Pagination();

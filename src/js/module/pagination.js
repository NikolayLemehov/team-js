class Pagination {
  #near = 2;
  #age = 1;

  constructor(total, current) {
    this.total = total;
  }

  change(num) {
    const arr = []

    let min = num - this.#near
    min = min < 1 ? 1 : min;

    let max = num + this.#near
    max = max > this.total ? this.total : max;

    for (let i = min; i <= max; i++) {
      arr.push(i)
    }

    if (min > this.#age + 2) {
      arr.unshift('...')
      for (let i = this.#age; i > 0; i--) {
        arr.unshift(i);
      }
    } else {
      for (let i = min - 1; i > 0; i--) {
        arr.unshift(i);
      }
    }

    if (max < this.total - this.#age - 1) {
      arr.push('...')
      for (let i = this.total - this.#age + 1; i <= this.total; i++) {
        arr.push(i);
      }
    } else {
      for (let i = max + 1; i <= this.total; i++) {
        arr.push(i);
      }
    }
    console.log(arr)
  }
}

const pagination = new Pagination(11)
pagination.change(1)
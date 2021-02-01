class Stack {
  #store;
  constructor() {
    this.#store = [];
  }
  push = (item) => {
    this.#store.push(item);
  }
  pop = () => {
    this.#store.pop();
  }
}

module.exports = new Stack();
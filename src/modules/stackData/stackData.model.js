class Stack {
  #store;
  constructor() {
    this.#store = [];
  }
  push = (item) => {
    this.#store.push(item);
  }
  pop = () => {
    return this.#store.pop();
  }
  getLength = () => {
    return this.#store.length;
  }
}

module.exports = new Stack();
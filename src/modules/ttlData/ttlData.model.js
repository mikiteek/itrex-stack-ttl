const NodeTtl = require("node-ttl");

class TtlData {
  #ttl;
  constructor() {
    this.#ttl = new NodeTtl();
  }

  push = ({key, value, ttl=0}) => {
    this.#ttl.push(key, value, null, ttl);
  }

  get = (key) => {
    return this.#ttl.get(key);
  }

  remove = (key) => {
    return this.#ttl.del(key);
  }
}

module.exports = new TtlData();
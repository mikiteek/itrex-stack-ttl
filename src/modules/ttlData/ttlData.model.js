const NodeTtl = require("node-ttl");

class TtlData {
  #ttl;
  constructor() {
    this.#ttl = new NodeTtl();
  }

  push = ({key, value, ttl=0}) => {
    this.#ttl.push(key, value, null, ttl);
  }
}

module.exports = new TtlData();
const ttl = require("./ttlData.model");
const {validateAddToTtl} = require("../../utils/validateTtlData");

class TtlDataController {
  addItemToTtl = (req, res, next) => {
    try {
      const {body} = req;
      const error = validateAddToTtl(body);
      if (error) {
        return res.status(400).json(error.details);
      }
      ttl.push(body);
      return res.status(201).send();
    }
    catch (error) {
      next(error);
    }
  }
}

module.exports = new TtlDataController();
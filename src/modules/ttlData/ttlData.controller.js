const ttl = require("./ttlData.model");
const {validateAddToTtl, validateGetItemByKey} = require("../../utils/validateTtlData");

class TtlDataController {
  addItemToTtl = (req, res, next) => {
    try {
      const {body} = req;
      const error = validateAddToTtl(body);
      if (error) {
        return res.status(400).json(error.details);
      }
      const isKeyExist = ttl.get(body.key);
      if (isKeyExist) {
        return res.status(409).json({message: "Key already exist"})
      }
      ttl.push(body);
      return res.status(201).send();
    }
    catch (error) {
      next(error);
    }
  }

  getItemByKey = (req, res, next) => {
    try {
      const {query} = req;
      const error = validateGetItemByKey(query);
      if (error) {
        return res.status(400).json(error.details);
      }
      const value = ttl.get(query.key);
      if (value === null) {
        return res.status(404).json({message: "Not found, or value is empty"});
      }
      return res.status(200).json({key: value});
    }
    catch (error) {
      next(error);
    }
  }
}

module.exports = new TtlDataController();
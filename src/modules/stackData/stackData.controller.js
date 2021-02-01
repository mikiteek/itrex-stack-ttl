const stack = require("./stackData.model");

class StackDataController {
  addDataToStack = (req, res, next) => {
    try {
      const {body: {data}} = req;
      stack.push(data);

      return res.status(201).send();
    }
    catch (error) {
      next(error);
    }
  }
}

module.exports = new StackDataController();
const {stackStore} = require("./stackData.service");

class StackDataController {
  addDataToStack = (req, res, next) => {
    try {
      const {body: {data}} = req;
      stackStore.push(data);

      return res.status(201).send();
    }
    catch (error) {
      next(error);
    }
  }
}

module.exports = new StackDataController();
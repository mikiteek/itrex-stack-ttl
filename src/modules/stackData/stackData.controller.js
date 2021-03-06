const stack = require("./stackData.model");
const {validateAddToStack} = require("../../utils/validateStackData");

class StackDataController {
  addItemToStack = (req, res, next) => {
    try {
      const {body: {data}, body} = req;
      const error = validateAddToStack(body);
      if (error) {
        return res.status(400).json(error.message);
      }
      stack.push(data);

      return res.status(201).send();
    }
    catch (error) {
      next(error);
    }
  }

  removeItemFromStack = (req, res, next) => {
    try {
      if (stack.getLength() === 0) {
        return res.status(204).send();
      }
      const removedItem = stack.pop();

      return res.status(200).json({item: removedItem});
    }
    catch (error) {
      next(error);
    }
  }
}

module.exports = new StackDataController();
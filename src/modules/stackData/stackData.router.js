const {Router} = require("express");

const stackDataRouter = Router();
const stackDataController = require("./stackData.controller");

stackDataRouter.post(
  "/",
  stackDataController.addItemToStack,
);

stackDataRouter.delete(
  "/",
  stackDataController.removeItemFromStack,
);

module.exports = stackDataRouter;
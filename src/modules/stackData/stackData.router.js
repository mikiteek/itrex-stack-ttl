const {Router} = require("express");

const stackDataRouter = Router();
const stackDataController = require("./stackData.controller");

stackDataRouter.post(
  "/",
  stackDataController.addDataToStack,
);

module.exports = stackDataRouter;
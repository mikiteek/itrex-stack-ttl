const {Router} = require("express");

const ttlDataRouter = Router();
const ttlDataController = require("./ttlData.controller");

ttlDataRouter.post(
  "/",
  ttlDataController.addItemToTtl,
);

ttlDataRouter.get(
  "/",
  ttlDataController.getItemByKey,
);

module.exports = ttlDataRouter;
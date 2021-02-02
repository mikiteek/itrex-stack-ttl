const {Router} = require("express");

const ttlDataRouter = Router();
const ttlDataController = require("./ttlData.controller");

ttlDataRouter.post(
  "/",
  ttlDataController.addItemToTtl,
);

ttlDataRouter.get(
  "/:key",
  ttlDataController.getItemByKey,
);

ttlDataRouter.delete(
  "/:key",
  ttlDataController.removeItemByKey,
);

module.exports = ttlDataRouter;
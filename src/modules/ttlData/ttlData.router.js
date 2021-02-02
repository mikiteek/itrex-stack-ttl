const {Router} = require("express");

const ttlDataRouter = Router();
const ttlDataController = require("./ttlData.controller");

ttlDataRouter.post(
  "/",
  ttlDataController.addItemToTtl,
);

module.exports = ttlDataRouter;
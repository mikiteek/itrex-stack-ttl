require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const stackDataRouter = require("./modules/stackData/stackData.router");
const ttlDataRouter = require("./modules/ttlData/ttlData.router");

const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

app.use("/stack", stackDataRouter);
app.use("/ttl", ttlDataRouter);

app.use(errorMiddleware);

module.exports = app;
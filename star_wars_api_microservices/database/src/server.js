const express = require("express");
const morgan = require("morgan");
const router = require("./routes")

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(router)


module.exports = server;

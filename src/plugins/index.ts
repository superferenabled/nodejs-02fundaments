const { getAge } = require("./get-age.plugin");
const { uuidv4 } = require("./get-uuid.plugin");
const { httpClientPlugin: http } = require("./http-client.plugin");
const buildLogger = require("./logger.plugin");

module.exports = {
    getAge,
    uuidv4,
    http,
    buildLogger
}
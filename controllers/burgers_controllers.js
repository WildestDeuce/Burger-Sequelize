let express = require("express");
let burger = require("../models/burgers");

// let router = express.Router();

module.exports = function (app) {
    app.get("*", function () {
        console.log("test server")

    })
}

// let html = require("")


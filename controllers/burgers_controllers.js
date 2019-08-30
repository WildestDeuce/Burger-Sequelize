let express = require("express");
let burger = require("../models/burgers");

// let router = express.Router();

module.exports = function (app) {
    app.get("/", function (req,res) {
        console.log("test server")
        res.render("index")
    })
}

// let html = require("")


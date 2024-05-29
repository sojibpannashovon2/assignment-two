"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var app = (0, express_1.default)();
// parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//Chech server connection
app.get("/", function (req, res) {
    console.log("Project two is connect succesfully !!");
});
exports.default = app;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const xpress = require('express')
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 3000;
app.get('/', function (req, res) {
    res.status(200).json({ ok: 'Hello World!' });
    res.status(401).json({ error: 'Error' });
    res.json({ ok: 'Hello World!' });
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});

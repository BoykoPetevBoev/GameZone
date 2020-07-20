const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

module.exports = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.static('static'));
    app.use(cookieParser());
    app.use(express.urlencoded());
};
var express = require('express');
var app = express();

app.use((req, res) => {
    res.json({ "ciao": "martina" });
});























module.exports = app;

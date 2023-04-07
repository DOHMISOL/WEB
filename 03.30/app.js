var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/testhtml', function (req, res) {
  res.sendfile("test.html");
});

app.get('/testfile', function (req, res) {
  res.sendfile("testfile.html");
});

app.get('/js', function (req, res) {
  res.sendfile("javascript.html");
});

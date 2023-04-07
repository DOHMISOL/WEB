var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/test', function (req, res) {
  res.send("hello world");
});

app.get('/testfile', function (req, res) {
  console.log("hello world");
  console.log("hello world2");
  console.log("hello world3");
  console.log("hello world4");
  res.sendfile("03.09.html");

  app.get('/testfile', function (req, res) {
    console.log("hello world");
    console.log("hello world2");
    console.log("hello world3");
    console.log("hello world4");
    res.sendfile("03.09.html");
  });

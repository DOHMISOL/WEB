var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/test', function (req, res) {
  console.log("hello world");
  res.send("test.html");
});

app.get('/testfile', function (req, res) {
  console.log("hello world");
  res.sendfile("hello.html");
});
app.get('/test3', function (req, res) {
  console.log("hello world3");
  res.send("test.html3");
});
app.get('/test4', function (req, res) {
  console.log("hello world4");
  res.send("test444");
});

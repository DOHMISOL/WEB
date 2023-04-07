var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/test', function (req, res) {
  console.log("hello world");
  res.sendfile("회원가입.html");
});

app.get('/testfile', function (req, res) {
  console.log("hello world");
  res.sendfile("글쓰기.html");
});

app.get('/table', function (req, res) {
  console.log("hello world");
  res.sendfile("table.html");
});

app.get('/resume', function (req, res) {
  console.log("hello world");
  res.sendfile("이력서.html");
});

app.get('/css', function (req, res) {
  console.log("hello world");
  res.sendfile("css.html");
});

app.get('/javascript', function (req, res) {
  console.log("server console");
  res.sendfile("javascript.html");
});

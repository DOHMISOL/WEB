var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/test', function (req, res) {
  res.send("hello world");
});

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'web'
});

connection.connect();
connection.query('SELECT * from student', function (error, results, fields) {
  console.log(results);
});
connection.query('UPDATE STUDENT SET NAME = "임꺽정" WHERE NO = 10', function (error, results, fields) {
  console.log(results);
});

app.get('/testfile', function (req, res) {
  console.log("hello world");
  console.log("hello world2");
  console.log("hello world3");
  console.log("hello world4");
  res.sendfile("03.09.html");
});

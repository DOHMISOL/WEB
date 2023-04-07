var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'web'
});

connection.connect();

app.get('/test2', function (req, res) {
  connection.query('select title from post;', function (error, results, fields) {
    console.log(results);
    res.send(results);
  });
});

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


app.get('/list', function (req, res) {
  res.sendfile("list.html");
});

app.get('/getList', function (req, res) {
  let query = `select * from student order by no asc` // delete할때는 *로 변
  connection.query(query, function(error, results, fields){
    if (error) throw error
    res.send(results);
  });
});

app.get('/deletePost', function (req, res) {
  let query = `delete from post WHERE NO = ${req.query.no};`;
  console.log(query);
  connection.query(query, function(error, results, fields){
    console.log(results);
    res.send(results);
  });
});

app.get('/detailPage', function (req, res) {
  res.sendfile("detailPage.html");
});

app.get('/getList2', function (req, res) {

  let num = req.query.no;
  let query = `select * from student WHERE NO = ('${num}')` // delete할때는 *로 변
  connection.query(query, function(error, results, fields){
    if (error) throw error
    res.send(results);
  });
});
// app.get('/insert', function (req, res) {
//   res.sendfile("insert.html");
// });
//
// app.get('/insertList', function (req, res) {
//   let query = `INSERT INTO post
//               (title, content)
//               VALUES
//               ('00','asdf')`
//   connection.query(query, function(error, results, fields){
//     if (error) throw error
//
//   });
//   let query = `select * from student order by no asc`
//   connection.query(query, function(error, results, fields){
//     if (error) throw error
//     res.send(results);
//   });
//
// });

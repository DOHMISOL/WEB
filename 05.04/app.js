var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/Q1', function (req, res) {
  res.sendfile("Q1.html");
});

app.get('/Q2', function (req, res) {
  res.sendfile("Q2.html");
});

app.get('/Q3', function (req, res) {
  res.sendfile("Q3.html");
});

app.get('/Q3calc', function (req, res) {
  let height = Number(req.query.height);
  let weight = Number(req.query.weight);
  let bmi = weight / ((height / 100)^2);
  let answer ="";
  if (bmi < 18.5){
    answer = "저체중";
  } else if (bmi < 25) {
    answer = "정상";
  } else if (bmi < 30) {
    answer = "과체중";
  } else {
    answer = "비만";
  }
  res.send(answer);
});

app.get('/Q4', function (req, res) {
  res.sendfile("Q4.html");
});

let scores = [];

app.get('/Q4calc', function (req, res) {
  let kor = parseInt(req.query.kor);
  let eng = parseInt(req.query.eng);
  let math = parseInt(req.query.math);
  let total = kor * 2 + eng * 3 + math * 5;

  scores.push(total);
  scores.sort(function(a, b){return b-a;});

  let rank = scores.indexOf(total) + 1;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === total && i < rank - 1) {
      rank--;
    } else if (scores[i] < total) {
      break;
    }
  }
  res.send(rank.toString());
});

var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/radio2', function (req, res) {
  res.sendfile("radio2.html");
});

app.get('/ajax', function (req, res) {
  res.sendfile("ajax.html");
});

app.get('/ajaxTest', function (req, res) {
  res.send("ajax response");
});

app.get('/getFile', function (req, res) {
  res.sendfile("requestTest.html");
});

app.get('/request1', function (req, res) {
  res.send("response1");
});

app.get('/request2', function (req, res) {
  res.send("response2");
});

app.get('/request3', function (req, res) {
  res.send("response3");
});

app.get('/qs', function (req, res) {
  res.sendfile("qs.html");
});

app.get('/qsSum', function (req, res) {
  let serverSideNum1 = Number(req.query.numberQS1);
  let serverSideNum2 = Number(req.query.numberQS2);
  let resultNum = serverSideNum1 + serverSideNum2;
  res.send(""+resultNum);
});

app.get('/qs3', function (req, res) {
  res.sendfile("qs3Number.html");
});

app.get('/qs3Number', function (req, res) {
  let serverSideNum1 = Number(req.query.numberQS1);
  let serverSideNum2 = Number(req.query.numberQS2);
  let serverSideNum3 = Number(req.query.numberQS3);
  console.log(req.query);
  let resultNum = serverSideNum1 * serverSideNum2 * serverSideNum3;
  res.send("" + resultNum);
});

app.get('/price', function (req, res) {
  res.sendfile("price.html");
});

app.get('/priceRange', function (req, res) {
  let serverSideNum1 = Number(req.query.numberQS1);
  let item1 = 1000;
  let item2 = 5000;
  let item3 = 10000;
  let item4 = 30000;
  let item5 = 50000;
  let item6 = 100000;
  let item7 = 500000;
  if(serverSideNum1 > 500000){
    res.send("item7")
  }else if (serverSideNum1 > 100000 && serverSideNum1 <= 500000) {
    res.send("item6")
  }else if (serverSideNum1 > 50000 && serverSideNum1 <= 100000) {
    res.send("item5")
  }else if (serverSideNum1 > 30000 && serverSideNum1 <= 50000) {
    res.send("item4")
  }else if (serverSideNum1 > 10000 && serverSideNum1 <= 30000) {
    res.send("item3")
  }else if (serverSideNum1 > 5000 && serverSideNum1 <= 10000) {
    res.send("item2")
  }else if (serverSideNum1 > 1000 && serverSideNum1 <= 5000) {
      res.send("item1")
  }else{
    res.send("구입불가")
  }
  res.send(result)
});

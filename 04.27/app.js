var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/carPrice', function (req, res) {
  res.sendfile("carPrice.html");
});

app.get('/getCarPrice', function (req, res) {
  let priceInfo = [
    {itemName:"item1", price:1000},
    {itemName:"item2", price:5000},
    {itemName:"item3", price:10000},
    {itemName:"item4", price:30000},
    {itemName:"item5", price:50000},
    {itemName:"item6", price:100000},
    {itemName:"item7", price:500000},
  ]
  let inputPrice = req.query.price;
  let availableItemName = "구입불가";
  for(let i=0; i<priceInfo.length;i++){
    if(priceInfo[i].price <= inputPrice){
    availableItemName = priceInfo[i].itemName;
    }
    else{
      break;
    }
  }
  res.send(availableItemName);
});

app.get('/Car', function (req, res) {
  res.sendfile("Car.html");
});

app.get('/CarValue', function (req, res) {
  let priceInfo = [
    {itemName:"1", price:2100},
    {itemName:"2", price:1300},
    {itemName:"3", price:1500},
    {itemName:"4", price:3500},
    {itemName:"5", price:3200},
  ]
  let colorInfo = [
    {itemName:"1", price:100},
    {itemName:"2", price:120},
    {itemName:"3", price:200},
    {itemName:"4", price:130},
    {itemName:"5", price:80},
  ]
  let inputCar = req.query.carValue;
  let inputColor = req.query.carcolor;
  let price;
  let colorPrice;
  let itemPrice;

  for(let i=0; i<priceInfo.length;i++){
    if(priceInfo[i].itemName == inputCar){
      price = priceInfo[i].price;
    }
  }
  for(let i=0;i<colorInfo.length;i++){
    if(colorInfo[i].itemName == inputColor){
      colorPrice = colorInfo[i].price;
  }
  itemPrice = price + colorPrice;
  res.send("선택하신 차의 총 가격은  : "+itemPrice+"입니다.");
}});

const express = require('express');
const bodyParser=require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.get('/', function (req, res) {
  res.sendFile(__dirname+"/bmicalculator.html");
});

app.post('/', function (req, res){
  // res.send("Calculating BMI......");
  // console.log(req.body.num1);
  var n1=parseFloat(req.body.num1);
  var n2=parseFloat(req.body.num2);
  //
  // var n3=n1+n2;

  var n3=n1/(n2*n2);
//
// return Math.round(a);
    res.send("You're BMI is......"+n3);
});

app.listen(3000, function(){
  console.log("servaer staeted with 3000");
});

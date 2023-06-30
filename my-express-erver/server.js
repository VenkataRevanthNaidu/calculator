const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send("<h1>hello world<h1>");
})
app.get('/contact', function (req, res) {
  res.send("email:venkatarevanthnaidu@gmail.com");
})
app.get('/about', function (req, res) {
  res.send("This is venkata Revanth Naidu, Looking for a Job in Full-stack devlopment");
})
app.get('/work', function (req, res) {
  res.send("html");
})

app.listen(3400, function(){
  console.log("localhost is on in 3000");
})

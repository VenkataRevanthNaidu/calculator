const express = require("express");

const https = require('node:https');

const app = express();
app.get("/", function(req, res) {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=55252f5b29fbb273ff63b6ae16d3ecdd"
  https.get(url, function(response) {
    console.log(response.statusCode);
    resonse.on("data", function(data) {
      const wheatherdata = json.parse(data);
      const whetaherdesc = wheatherdata.Wheather.description
      const icon = wheatherdata.Wheather.icon

      const imageurl="";
      res.write("<p></p>");
      res.write("<img src="+ imageurl+">");
      res.send()

      console.log(whetaherdesc);
    })
  })
  res.send("server is up and fornt");
})




app.listen(3000, function() {
  console.log("server is running in port 3000");
})

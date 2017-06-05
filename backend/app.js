var dbctrl = require("./dbconnection.js");
var route = require("./route.js")
var express = require('express');
var app = express();
dbctrl.open();
dbctrl.open();

app.set('post', 3000)

app.use('/api', route);



app.get('/json', function (req, res) {
  console.log(req.query.name);
  console.log('Homepage');
  res
    .status(304)
    .json({'emdonton': true, 'calgary': false})
})

var server = app.listen(app.get('post'), function () {
  console.log('Example app listening on port 3000!')
})
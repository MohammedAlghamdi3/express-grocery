// Set up express
var express = require('express');
var app = express();
var port = 3000;

// Make your app listen
app.listen(port, function () {
  console.log(`App is listening on port ${port}`);
})
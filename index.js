// Set up express
var express = require('express');
var app = express();
var port = 3000;

var fruitsController = require('./controllers/fruits_controller');
var vegetablesController = require('./controllers/vegetables_controller');

app.get('/', function(request, response){
  response.send('This is my grocery store. I sell fruits and vegetables.')
})

app.use('/fruits', fruitsController);
app.use('/vegetables', vegetablesController);

// Make your app listen
app.listen(port, function () {
  console.log(`App is listening on port ${port}`);
})
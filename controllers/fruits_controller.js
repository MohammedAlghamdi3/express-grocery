var express = require('express');
var router = express.Router()

var fruits = require('../modules/fruits');

router.get('/', function(request,response){
  //gives me an array of the keys for an object
  var fruitNames = Object.keys(fruits);
  var fruitList = fruitNames.join(', ');
  response.send(`These are our fruits: ${fruitList}`)
})

router.get('/:fruit', function (request, response) {
  var fruitName = request.params.fruit;
  var fruit = fruits[fruitName];
  response.send(`${fruitName} is ${fruit.description} and costs ${fruit.price}`)
})

module.exports = router;
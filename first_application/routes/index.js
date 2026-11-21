var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var places = [
    { name: 'Home', rating: 10 },
    { name: 'Work', rating: 8 },
    { name: 'Inwood', rating: 10 },
    { name: 'Minnesota', rating: 6 },
    { name: 'Cousins House', rating: 10 }
  ];

  // Create a name
  var myname = "Layla Jenkins";

  res.render('index', { 
    title: 'Favorite Places',
    places: places,
    myname: myname
  });
});

module.exports = router;

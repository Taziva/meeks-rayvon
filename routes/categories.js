var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('categories', { title: 'Express' });
});

router.get('/branded', function(req, res, next) {
  res.render('categories', { title: 'Express' })
})

module.exports = router;

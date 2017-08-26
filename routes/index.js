var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index/index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('index/about', { title: 'Express' });
});
module.exports = router;

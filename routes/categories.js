var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index/categories', { title: 'Express' });
});

router.get('/branded', function(req, res, next) {
  res.render('categories/show', { title: 'branded',
                                  numberOfPics: 6 })
})

router.get('/diary', function(req, res, next) {
  res.render('categories/show', { title: 'diary',
                                   numberOfPics: 12})
})

router.get('/editorial', function(req, res, next) {
  res.render('categories/show', { title: 'editorial',
                                   numberOfPics: 9})
})

router.get('/events', function(req, res, next) {
  res.render('categories/show', { title: 'events',
                                   numberOfPics: 6})
})

router.get('/food', function(req, res, next) {
  res.render('categories/show', { title: 'food',
                                   numberOfPics: 6})
})

router.get('/travel', function(req, res, next) {
  res.render('categories/show', { title: 'travel',
                                   numberOfPics: 5})
})


module.exports = router;

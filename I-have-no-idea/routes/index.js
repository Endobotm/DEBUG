var express = require('express');
var router = express.Router();
var users = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/post', function(req, res, next) {
  res.render('write');
});

router.get('/reviews', function(req, res, next) {
  users.find()
    .then(function (game) {
      res.render("read", { game });
  })
});

router.post('/submit', function (req, res, next) {
  users.create({
    gamename: req.body.gamename,
    review: req.body.review
  })
    .then(function() { 
      res.redirect('/reviews');
    })
})

router.post('/submit', function (req, res, next) {
  users.create({
    gamename: req.body.gamename,
    review: req.body.review
  })
    .then(function() { 
      res.redirect('/reviews');
    })
})
router.get('/update/:id', function (req, res, next) {
  users.findOne({ _id: req.params.id })
    .then(function (game) {
    res.render("update", { game });
  })
})
router.post('/update/:id', function (req, res, next) {
  let updated = {
    gamename: req.body.gamename,
    review: req.body.review
  }
  users.findOneAndUpdate({ _id: req.params.id }, { '$set': updated }, { required: true })
    .then(function (game) { 
      res.redirect('/reviews');
    })
})
router.get('/remove/:id', function (req, res, next) {
  users.findOneAndDelete({ _id: req.params.id })
    .then(function () {
    res.redirect('/reviews');
  })
})
module.exports = router;

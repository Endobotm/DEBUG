var express = require('express');
var router = express.Router();
var data = require('./users');
const app = express();

/* GET home page. */
router.get('/', function (req, res, next) {
  data.find({}, (err, docs) => {
    res.render('index', { data : docs });
  })
});
router.get('/mytasks', (req, res) => {
  data.find({}, (err, docs) => { 
    if (err) {
      console.log(err);
    }
    else {
      res.render('index', { data : docs });
    }
  })
})
router.post('/submit', (res, req, next) => {
  data.create({
    content: req.body.tasks
  })
  .then(() => { 
    res.redirect('/');
   })
})
router.get('/edit/:id', (res, req) => {
  const id = req.params.id; 
  data.find({}, (err, docs) => {
    res.render('update', { data: docs, idupdate: id });
  });
})
router.post('/edit/:id', (res, req) => {
  const id = req.params.id; 
  data.findByIdAndUpdate(id, {
    content: req.body.tasks,
  }, err => {
    if (err) {
      res.send(err);
    } else {
      res.redirect('/');
    }
  })
})
router.get('/remove/:id', (res, req) => {
  const id = req.params.id; 
  data.findByIdAndRemove(id, err => {
    if (err) {
      res.send('Error in code');
    } else {
      res.redirect('/');
    }
  })
})
module.exports = router;

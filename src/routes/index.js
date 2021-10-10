var express = require('express');
var router = express.Router();

const emailController = require('../controllers/email.controller')

router.get('/', function(req, res, next) {
  res.render('index', { state: -1, rou: 'm'});
});

router.post('/send', async function (req, res) {
  if(req.body.name && req.body.email && req.body.phone && req.body.comment){
    const response = await emailController.send(req.body.name, req.body.email, req.body.phone, req.body.comment)
    if (response === 0){
      res.render('index', { state: 0, rou: 's'})
    } else {
      res.render('index', { state: -1, rou: 's'})
    }
  }else{
    res.redirect('/')
  }
})

module.exports = router;

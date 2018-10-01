const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('gpio', { title: 'Pines GPIO' });
});

router.get('/camera', function(req, res, next) {
  res.render('camera', { title: 'Cam view' });
});

module.exports = router;

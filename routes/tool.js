var express = require('express');
var router = express.Router();

router.get('/editor', function(req, res, next) {
  res.render('tool/editor', { title: '富文本编辑器' });
});

module.exports = router;

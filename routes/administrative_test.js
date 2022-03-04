var express = require('express');
const math_36methods_data=require('../json_data/math_36methods.json')
var router = express.Router();

router.get('/home', function(req, res, next) {
  res.render('administrative_test/home', { title: '行政能力测试' });
});

router.get('/math_36methods',function(req,res,next){
  res.render('administrative_test/math_36methods', { title: '数量资料秒杀36计',data:math_36methods_data});
})

module.exports = router;
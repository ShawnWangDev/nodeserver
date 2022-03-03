var express = require('express');
var fs=require('fs')
const path=require('path');
const math_36methods_data=require('../json_data/math_36methods.json')
var router = express.Router();
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('administrative_test/home', { title: 'study' });
});


router.get('/math_36methods',function(req,res,next){
  res.render('administrative_test/math_36methods', { title: 'study',data:math_36methods_data});
})
module.exports = router;

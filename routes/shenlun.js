var express = require('express');
const mysql = require('mysql');
const db = require('../config/db');
var router = express.Router();


router.get('/home', function (req, res, next) {
  var conn = mysql.createConnection(db);
  conn.query('select id,title from shenlun;', (err, results, fields) => {
    if (err) {
      throw err;
    }
    res.render('shenlun/home', { title: '申论', data: results });
  })
  conn.end((err) => {
    console.log(err);
  })
})

router.get("/show/:id", function (req, res, next) {
  let id = req.params.id
  let sql = 'select title,material,question_and_answer from shenlun where id=' + id
  var conn = mysql.createConnection(db);
  conn.query(sql, (err, results, fields) => {
    if (err) {
      throw err;
    }
    res.render('shenlun/show', 
    { title: results[0].title, material: results[0].material, QA: JSON.parse(results[0].question_and_answer) });
  })
  conn.end((err) => {
    console.log(err);
  })
})

module.exports = router;

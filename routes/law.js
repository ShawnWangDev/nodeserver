var express = require('express')
const mysql = require('mysql');
const db = require('../config/db');
var router = express.Router()


function getById(id, json) {
    for (i in json) {
        if (json[i].id == id) {
            return json[i]
        }
    }
}
router.get('/', function (req, res, next) {
    res.render('law/home', { title: '条文' })
})

router.get('/police', function (req, res, next) {
    //var jsonObj=JSON.parse(police_law_json)
    // let id_and_title_arr = []
    // for (i in law_police_json) {
    //     let law = law_police_json[i]
    //     let id_and_title = { "id": law.id, "title": law.title }
    //     id_and_title_arr.push(id_and_title)
    // }
    var conn = mysql.createConnection(db);
    conn.query('select id,title from law;', (err, results, fields) => {
        if (err) {
            throw err;
        }
        var laws = []
        for (i in results) {
            var law = {
                id: results[i].id,
                title: results[i].title
            }
            laws.push(law)
        }
        res.render('law/police', { title: '警察相关条文', laws: laws });
    })
    conn.end((err) => {
        console.log(err);
    })
    //res.render('law/police', { title: '警察条文', data: id_and_title_arr });
})

router.get('/police/:id', function (req, res, next) {
    var conn = mysql.createConnection(db);
    let id = req.params.id
    let sql = "select title,content from law where id=" + id
    conn.query(sql, (err, results, fields) => {
        if (err) {
            throw err;
        }
        console.log('t>>> '+results[0].type)
        //console.log('c>>> '+results[0].content)
        res.render('law/show', { title: results[0].title, content: results[0].content });
    })
    conn.end((err) => {
        console.log(err);
    })
    // let json = getById(req.params.id, law_police_json)
    // res.render('law/show', { title: json.title, content: json.content })
})

module.exports = router
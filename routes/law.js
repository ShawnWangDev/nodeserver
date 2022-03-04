var express = require('express')
const { route } = require('.')
var router = express.Router()
var law_police_json = require('../json_data/law/law_poilce.json')


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
    let id_and_title_arr = []
    for (i in law_police_json) {
        let law = law_police_json[i]
        let id_and_title = { "id": law.id, "title": law.title }
        id_and_title_arr.push(id_and_title)
    }
    res.render('law/police', { title: '警察条文', data: id_and_title_arr });
})

router.get('/police/:id', function (req, res, next) {
    let json = getById(req.params.id, law_police_json)
    res.render('law/show', { title: json.title, data: json.content })
})

module.exports = router
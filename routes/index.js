var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
  knex('amphibians').select().then(function (resultsFromQuery) {
    res.render('index', {list: resultsFromQuery});
  })
});

router.get('/create', function (req, res, next) {
  res.render('create')
});

router.get('/:id/edit', function (req, res, next) {
  knex('amphibians').where({id: req.params.id}).first().then(function (frog) {
    res.render('edit', {frog: frog})
  })
})

router.post('/:id/edit', function (req, res, next) {
  knex('amphibians').where({id: req.params.id}).update(req.body).then(function () {
    res.redirect("/" + req.params.id)
  })
})

router.get('/:id/delete', function (req, res, next) {
  knex('amphibians').where({id: req.params.id}).del().then(function () {
    res.redirect('/')
  })
})

router.get('/:id', function (req, res, next) {
  knex('amphibians').where({id: req.params.id}).first().then(function (froggy) {
    res.render('detail', {froggy: froggy})
  })
});

router.post('/create', function (req, res, next) {
  knex('amphibians').insert(req.body).then(function () {
    res.redirect('/');
  }).catch(function (err) {
    console.log(err);
    next(err)
  })
})


module.exports = router;

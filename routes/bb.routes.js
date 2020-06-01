const express = require('express')
const router = express.Router()
const BBModel = require('../models/bb.model');
const BBQuotesModel = require('../models/bbQuotes.model');

router.get('/', (req, res) => {
    res.render('home.hbs')
})

router.get('/characters', (req, res) => {
    BBModel.find()
    .then((characters) => {
        res.render('bb-char.hbs', {characters});
    }).catch(() => {
        res.send('Something went wrong');
    })
})

router.get('/quotes', (req, res) => {
    BBQuotesModel.find()
    .then((quotes) => {
        res.render('bb-quotes.hbs', {quotes});
    }).catch(() => {
        res.send('Something went wrong');
    })
})

module.exports = router;
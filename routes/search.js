const express = require('express');
var router = express.Router();
const connection = require('./config/dbconfig');

router.get('/', (req, res) => {
    res.render('search');
});

router.post('/', (req, res) => {
    const sql = 'select * from country';
    connection.query('');
});
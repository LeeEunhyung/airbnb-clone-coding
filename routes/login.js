var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const dbconfig = require('./config/dbconfig');
const connection = mysql.createConnection(dbconfig);

connection.connect();

router.get('/', function(req, res, next) {
    res.render('login');
});

router.post('/', (req, res) => {
    const sql = "select * from users where email = '" + req.body.email + "' and password = sha1('" + req.body.password + "')";
    connection.query(sql, (error, rows) => {
        if (error) throw error;
        res.send(rows);
    })
})

module.exports = router;

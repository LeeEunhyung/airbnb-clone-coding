var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const dbconfig = require('./dbconfig');
const connection = mysql.createConnection(dbconfig);

/* GET home page. */
connection.connect();

router.get('/', function(req, res, next) {
  connection.query('select * from tmp', (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

module.exports = router;

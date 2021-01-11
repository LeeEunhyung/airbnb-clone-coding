const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: '0520',
    database: 'airbnb',
});

connection.connect();

module.exports = connection;
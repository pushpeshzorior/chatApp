'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");

  let createTodos = `create table if not exists todos(
    id int primary key auto_increment,
    title varchar(255)not null,
    completed tinyint(1) not null default 0
)`;

dbConn.query(createTodos, function(err, results, fields) {
if (err) {
console.log(err.message);
}
});
});
module.exports = dbConn;
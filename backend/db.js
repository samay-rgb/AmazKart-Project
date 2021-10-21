var mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "AmazKart",
});

module.exports = db;

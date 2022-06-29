// import mysql from node_modules
var mysql = require("mysql");

// Creating Connection with database

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"servicio"
});

// exporting function with common js modules.
module.exports = connection;


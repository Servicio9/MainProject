//import connection from connection.js

var con = require("./connection")

// import express from node-modules
var express = require('express');


var app = express();

// import body-parse from node-modules
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded( {extended:true}));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/SignUp.html');
});

app.post('/',function(req,res){
    var fullname = req.body.fullname;
    var contactno = req.body.telnum;
    var cnic = req.body.cnic;
    var img = req.body.cninImg;
    con.connect(function(error){
        if(error) throw error;
        var sql = "insert into signup values('"+fullname+"','"+contactno+"','"+cnic+"','"+img+"')";

        con.query(sql,function(error,result){
            if(error) throw error;

            res.send("signed up succesfful");
        });
    });

});
app.listen(7000);
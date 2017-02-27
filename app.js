bodyParser 	= require("body-parser");
mongoose 		= require("mongoose");
var express = require("express");
var app 		= express();

mongoose.connect("mongodb://localhost/blogapp");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlendcoded({extended: true}));

//Schema


app.listen(3000, function(){
	console.log("You are now listening to the smooth sounds of port3000");
});
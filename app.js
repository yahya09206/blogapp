bodyParser 	= require("body-parser");
mongoose 		= require("mongoose");
var express = require("exress");
var app 		= express();

mongoose.connect("mongodb://localhost/blogapp");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlendcoded({extended: true}));
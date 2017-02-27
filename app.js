bodyParser 	= require("body-parser");
mongoose 		= require("mongoose");
var express = require("exress");
var app 		= express();

mongoose.connect("mongodb://localhost/blogapp");
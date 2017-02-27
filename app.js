bodyParser 	= require("body-parser");
mongoose 		= require("mongoose");
var express = require("express");
var app 		= express();

//App Config
mongoose.connect("mongodb://localhost/blogapp");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//Mongoose/Model Config
var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

//RESTFUL ROUTES
app.get("/", function(req,res){
	res.redirect("/blogs");
});


app.get("/blogs", function(req,res) {
	Blog.find({}, function(err, blogs) {
		if(err){
			console.log(err);
		}else{
			res.render("index", {blogs: blogs});
		}
	});
});


app.listen(3000, function(){
	console.log("You are now listening to the smooth sounds of port3000");
});
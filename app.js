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

//Index Route
app.get("/blogs", function(req,res) {
	Blog.find({}, function(err, blogs) {
		if(err){
			console.log(err);
		}else{
			res.render("index", {blogs: blogs});
		}
	});
});

//New Route/Create
app.get("/blogs/new", function(req,res){
	res.render("new");
});

//Create Route
app.post("/blogs", function(req,res){
	Blog.create(req.body.blog, function(err,newBlog){
		if(err){
			res.render("new");
		}else{
			res.redirect("/blogs");
		}
	});
});

//SHOW ROUTE
app.get("/blogs/:id", function(req,res){
	Blog.findById(req.params.id, function(err,foundBlog){
		if(err){
			res.redirect("/blogs");
		}else{
			res.render("show", {blog: foundBlog});
		}
	});
});

//Edit Route
app.





app.listen(3000, function(){
	console.log("You are now listening to the smooth sounds of port3000");
});
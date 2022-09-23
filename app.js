//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname+"/public"));
function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}
app.get("/", function(req, res){
  res.render("jumbish");
});
app.post("/items",function(req,res){
  res.render("items");
});
app.post("/checkout",function(req,res){
  res.render("checkout");
});
app.post("/ordered",function(req,res){
  res.render("ordered");
});
app.listen(3000, function(){
  console.log("Server stated on port 3000.");
});

var express = require('express');
var hbs = require('express-handlebars');

var app = express();

app.set("port", process.env.PORT || 7777);

app.use("/assets", express.static("public"));
app.use("/source", express.static("src"));

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.get("/", function(req,res){
  res.render("index");
});

app.listen(7777, function(){
  console.log("Hiya, Synth!");
});

var express             = require("express");
var hbs                 = require("express-handlebars");
var parser              = require("body-parser");

var app                 = express();

var mongoose            = require("./db/schema_connect");
  var Synth             = mongoose.model("Synth");

app.set("port",         process.env.PORT || 7777);

app.use("/assets",      express.static("public"));
app.use("/source",      express.static("src"));

app.use(parser.urlencoded( {extended: true} ) );
app.use(parser.json() );

app.set("view engine", "hbs");
app.engine(".hbs",      hbs({
  extname:             ".hbs",
  partialsDir:          "views/partials/",
  layoutsDir:           "views/",
  defaultLayout:        "layout-main"
}));

// Create
app.post("/synths", function(req, res){
  Synth.create(req.body,
    res.redirect("/")
  );
});

//Update
app.post("/api/synths/:_id", function(req, res){
  Synth.findOneAndUpdate({ _id: req.params._id}, req.body, {new: true}).then(
    function(err, response){
      res.redirect("/");
    });
});

// Delete
app.post("/api/synths/:_id/delete", function(req, res){
  Synth.findOneAndRemove(req.params).then(function(){
      res.redirect("/");
    }
  );
});

app.get("/", function(req,res){
  Synth.find({}).then(function(synthsFromDb) {
    res.render("index", {
      synths: synthsFromDb
    });
  });
});

app.get("/api/synths/:_id", function(req,res){
  Synth.findOne(req.params).then(function(synthFromDb) {
    res.json(synthFromDb);
  });
});

app.listen(7777, function(){
  console.log("Hiya, Synth! 🎹");
});

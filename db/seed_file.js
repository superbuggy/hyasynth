//loads mongoose connection to Mongo DB
var mongoose = require("./schema_connect.js");
var seedData = require("./seed_presets.json");

//seed (getting model)
var Synth = mongoose.model("Synth");

//removes previous data
Synth.remove().then(function(){
  Synth.collection.insert(seedData).then(function(){
    process.exit();
  });
});

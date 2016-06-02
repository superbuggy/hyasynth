var mongoose = require("mongoose");

var SynthSchema = new mongoose.Schema(
  {
    id: String,
    ugen: Number,
    freq: Number,
    mul: Number,
    add: Number
  },
  {
    //allows entries that don't conform to schema
    strict: false
  }
);

mongoose.model("Synth", SynthSchema);
mongoose.connect(process.env.MONGOLAB_URL || "mongodb://localhost/hyasynth");

module.exports = mongoose;

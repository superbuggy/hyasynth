// IIFE for privacy
(function () {
    "use strict";

    // defines a unique global namespace via fluid library
    fluid.registerNamespace("hyasynth");

    var environment = flock.init();

    // SYNTH DEFINITIONS
    // Flock uses js-objects to define its synthesizers
    hyasynth.randomizedSynth = {
        ugen: "flock.ugen.sin",
        freq: {
            ugen: "flock.ugen.lfNoise",
            freq: 8,
            mul: 380,
            add: 60
        },
        mul: 0.1
    };

    hyasynth.editWave = function(synth, newWave){
      synth.ugen = newWave;
    };

    hyasynth.play = function (synth) {
        var mySynth = flock.synth({
            synthDef: synth
        });

        environment.start();
    };

    hyasynth.stop = function(){
      environment.stop();
      //initializes flock
      environment = flock.init();
    };

}());

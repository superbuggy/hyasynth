// IIFE for privacy
(function () {
    "use strict";

    // defines a unique global namespace via fluid library, this allows
    // synths to be accessed across the app
    fluid.registerNamespace("hyasynth");

    var environment = flock.init();
    hyasynth.loadedSynth = "";

    //edits the top-level unit generator
    hyasynth.editWave = function(synth, newWave){
      synth.ugen = newWave;
    };

    //edits an interior wave function, TODO phase this out in favor of true
    //modular connections
    hyasynth.editFreqMod = function(synth, newWave){
      synth.freq.ugen = newWave;
    };

    hyasynth.loadSynth = function(synth){
      hyasynth.loadedSynth = synth;
    };

    hyasynth.play = function (synth) {
        var mySynth = flock.synth({
            synthDef: synth
        });
        environment.start();
    };

    hyasynth.stop = function(){
      environment.stop();
      //re-initializes flock
      environment = flock.init();
    };

}());

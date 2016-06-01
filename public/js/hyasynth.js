// IIFE for privacy
(function () {
    "use strict";

    // defines a unique global namespace via fluid library
    fluid.registerNamespace("hyasynth");

    var environment = flock.init();

    // Expose any public functions or constructors as properties on your namesapce.
    hyasynth.play = function () {
        var mySynth = flock.synth({
            synthDef: {
                ugen: "flock.ugen.sin",
                freq: {
                    ugen: "flock.ugen.lfNoise",
                    freq: 8,
                    mul: 380,
                    add: 60
                },
                mul: 0.1
            }
        });

        // If you're on iOS, you will need to call in a listener for
        // some kind of user input action, such a button click or touch handler.
        // This is because iOS will only play sound if the user initiated it.
        environment.start();
    };

    hyasynth.stop = function(){
      environment.stop();
      environment = flock.init();
    };

}());

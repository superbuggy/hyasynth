var flock = require("flocking"),
    enviro = flock.init();

var s = flock.synth({
    synthDef: {
        ugen: "flock.ugen.sin",
        freq: {
            ugen: "flock.ugen.lfNoise",
            freq: 1,
            mul: 400,
            add: 180
        },
        mul: {
            ugen: "flock.ugen.envGen",
            envelope: {
                type: "flock.envelope.sin",
                duration: 0.25
            },
            gate: {
                ugen: "flock.ugen.lfPulse",
                width: .5,
                freq: 1
            }
        }
    }
});

enviro.play();

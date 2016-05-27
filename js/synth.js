//'context' creates a container, necessary for WebAudio to run
var context = new AudioContext();
//an oscillator creates a wave; vibrational behavior that translates into sound
oscillator = context.createOscillator();
//this connects the oscillator directly to speakers aka the 'destination'
//property of 'context'
oscillator.connect(context.destination);
//starts the oscillator; this fires off the sound-producing event
oscillator.start();

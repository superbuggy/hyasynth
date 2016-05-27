//'context' creates a container, necessary for WebAudio to run
var context = new AudioContext();


//an oscillator creates a wave; vibrational behavior that translates into sound
oscillator = context.createOscillator();

//gain nodes adjust the intensity of a signal. in this case it acts on the volume
gainNode = context.createGain();
gainNode.gain.value = 0.25;

//connects oscillator to gain node, and the gain node to the output
oscillator.connect(gainNode);
gainNode.connect(context.destination);

//starts the oscillator; this fires off the sound-producing event
oscillator.start();

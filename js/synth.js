//'context' creates a container, necessary for WebAudio to run
var context = new AudioContext();

var volSlider, pitSlider, detuneBox;

$( document ).ready(function() {
  volSlider = $("#volume");
  pitSlider = $("#pitch");
  detSlider = $("#detune");
  detSlider.change(updateDetune);
  volSlider.change(updateVol);
  pitSlider.change(updatePitch);
});

//an oscillator creates a wave; vibrational behavior that translates into sound
oscillator = context.createOscillator();

//gain nodes adjust the intensity of a signal. in this case it acts on the volume
gainNode = context.createGain();
gainNode.gain.value = 0.25;

//connects oscillator to gain node, and the gain node to the output
oscillator.connect(gainNode);

//starts the oscillator; this fires off the sound-producing event
oscillator.start();

function updateVol(){
  gainNode.gain.value = volSlider.val()/100;
}

function updateDetune(){
  oscillator.detune.value = detSlider.val();
}

function updatePitch(){
  oscillator.frequency.value = pitSlider.val();
}

function oscOn (boolSwitch){
  $( document ).ready(function() {
    var selectbox = $('#waveform-select');
    oscillator.type = selectbox.val();
  });
  if (boolSwitch) {
    gainNode.connect(context.destination);
  } else {
    gainNode.disconnect(context.destination);
  }
}

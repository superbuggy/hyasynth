$(document).ready(function(){

  var startButton = $('#start');
  var stopButton = $('#stop');
  var waveSelect = $('#waveform-select');

  waveSelect.change(function(){
    hyasynth.editWave(hyasynth.randomizedSynth, waveSelect.val() );
  });

  startButton.click(function(){
    hyasynth.play(hyasynth.randomizedSynth);
  });

  stopButton.click(function(){
    hyasynth.stop();
  });

});

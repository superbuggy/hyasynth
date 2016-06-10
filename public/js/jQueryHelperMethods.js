$(document).ready(function(){

  var startButton = $('#start');
  var stopButton = $('#stop');
  var waveMenu = $('#waveform-dropdown');
  var waveform = $('#change-wave');
  var freqModWave = $('#change-freq-wave');
  var loadButtons = $(".load-button");

  waveform.click(function(){
    hyasynth.editWave(hyasynth.loadedSynth, waveMenu.val() );
  });

  freqModWave.click(function(){
    hyasynth.editFreqMod(hyasynth.loadedSynth, waveMenu.val() );
  });

  startButton.click(function(){
    console.dir("start: " + JSON.stringify(hyasynth.loadedSynth));
    hyasynth.play(hyasynth.loadedSynth);
  });

  stopButton.click(function(){
    hyasynth.stop();
  });

  loadButtons.click(function(){
      var synthMongoId = $(this).attr("data-mongo-id");
      var synthToLoad;
      getSynthFromDb(synthMongoId).then(function(response){
        synthToLoad = response;
        hyasynth.loadSynth( synthToLoad );
      });
  });

  function getSynthFromDb(mongoId) {
    return $.getJSON("/api/synths/" + mongoId, function (data){
        //prunes MongoDB specific data, leaving just the JSON used by flocking's synthDef
        delete data._id;
        delete data.id;
        delete data.__v;
    }).then(function(response){
      response = cloneAndParse(response);
      return response;
    });
  }

function cloneAndParse(o) {
  return JSON.parse(JSON.stringify(o), function(k, v) {
    return (typeof v === "object" || isNaN(v)) ? v : v = parseFloat(v);
  });
}


});

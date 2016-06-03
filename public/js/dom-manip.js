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
      hyasynth.play(hyasynth.loadedSynth);
  });

  stopButton.click(function(){
    hyasynth.stop();
  });

  loadButtons.click(function(){
      var synthMongoId = $(this).attr("data-mongo-id");
      var synthToLoad;
      getSynthFromDb(synthMongoId, function(response){
        synthToLoad = response;
        hyasynth.loadSynth( synthToLoad );
      });
  });

  function getSynthFromDb(mongoId, callback) {
    var returnData;
    $.getJSON("/api/synths/" + mongoId, function (data){
        delete data._id;
        delete data.id;
        returnData = data;
    }).then(function(response){
      callback(response);
      return returnData;
    });

  }

});

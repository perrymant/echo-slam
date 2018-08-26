// Page 146 from Turner W. - JavaScript for Sound Artists. Learn to Code with the Web Audio API - 2017
"use strict";

var audioContext = new (window.AudioContext || window.webkitAudioContext)();
function audioFileLoader(fileDirectory) {
    var soundObj = {};
    var playSound = undefined;
    var getSound = new XMLHttpRequest();
    soundObj.fileDirectory = fileDirectory;
    getSound.open("GET", soundObj.fileDirectory, true);
    getSound.responseType = "arraybuffer";
    getSound.onload = function() {
        audioContext.decodeAudioData(getSound.response, function(buffer) {
            soundObj.soundToPlay = buffer;
        });
    };
    getSound.send();

    soundObj.play = function(time) {
        playSound = audioContext.createBufferSource();
        playSound.buffer = soundObj.soundToPlay;
        playSound.connect(audioContext.currentTime + time || 
        audioContext.currentTime);
    };

    soundObj.stop = function(time) {
        playSound.stop(audioContext.currentTime + time || 
            audioContext.currentTime);
    };
    return soundObj;
}   
function audioBatchLoader(obj) {
    for (var prop in obj) {
        obj[prop] = audioFileLoader(obj[prop])
    }
    return obj;
}

var sound = audioBatchLoader({
    c1: "sounds/c1.mp3",
    c2: "sounds/c2.mp3",
    c3: "sounds/c3.mp3",
    c4: "sounds/c4.mp3"
});

window.addEventListener("mousedown", function(){
    sound.c1.play();
});
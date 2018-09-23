// Cache references to DOM elements.

var elms = ['waveform', 'sprite0', 'sprite1', 'sprite2', 'sprite3', 'sprite4', 'sprite5'];
elms.forEach(function(elm) {
  window[elm] = document.getElementById(elm);
});

/**
   * Play a sprite when clicked and track the progress.
   * @param  {String} key Key in the sprite map object.
   */
  play: function(key) {
    var self = this;
    var sprite = self._spriteMap[key];

    // Play the sprite sound and capture the ID.
    var id = self.sound.play(sprite);
  }

  // Setup our new sprite class and pass in the options.
var sprite = new Sprite({
    width: [78, 60, 62, 70, 62, 1895],
    left: [0, 342, 680, 1022, 1361],
    src: ['../../tests/audio/sound2.webm', '../../tests/audio/sound2.mp3'],
    sprite: {
      one: [0, 450],
      two: [2000, 250],
      three: [4000, 350],
      four: [6000, 380],
      five: [8000, 340],
      beat: [10000, 11163]
    },
    spriteMap: {
      sprite0: 'one',
      sprite1: 'two',
      sprite2: 'three',
      sprite3: 'four',
      sprite4: 'five',
      sprite5: 'beat'
    }
  });
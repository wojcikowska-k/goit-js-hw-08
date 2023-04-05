const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const _ = require('lodash');

function saveCurrentTime(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

function getCurrentTime() {
  return localStorage.getItem('videoplayer-current-time');
}

player.on('timeupdate', _.throttle(saveCurrentTime, 1000));

player
  .setCurrentTime(getCurrentTime())
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        consolelog('wrong time input');
        break;

      default:
        // some other error occurred
        break;
    }
  });

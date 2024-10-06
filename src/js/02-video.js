import Player from '@vimeo/player';

import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(evt => {
    localStorage.setItem('videoplayer-current-time', evt.seconds);
  }, 1000)
);
console.log(localStorage);

if (localStorage.getItem('videoplayer-current-time')) {
  player
    .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
    .catch(function (error) {
      console.log('error');
    });
}

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

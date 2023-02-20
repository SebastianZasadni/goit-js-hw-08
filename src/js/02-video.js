import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});

player.on('timeupdate', 
_.throttle((function() {
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem('videoplayer-current-time', seconds);
         }).catch(function(error) {
            console.log("Error");
        });
 }), 1000));
 
const currentSeconds = localStorage.getItem('videoplayer-current-time');

 player.setCurrentTime(currentSeconds);


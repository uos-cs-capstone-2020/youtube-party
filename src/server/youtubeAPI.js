var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var youtubePlayer;

var playerStatus = -1;

function onYouTubeIframeAPIReady() {
    youtubePlayer = new YT.Player('player', {
        playerVars: {
            autoplay: 0,
            rel: 0,
            controls: 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    playerStatus = event.data;

}

function stopVideo() {
    player.stopVideo();
}
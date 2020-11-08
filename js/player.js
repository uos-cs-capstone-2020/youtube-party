var currPlayer = 0

// 0 - YouTube

// Gets all the player data
socket.on('getPlayerData', function(data) {
    var roomnum = data.room
    var caller = data.caller

    switch (currPlayer) {
        case 0:
            var currTime = player.getCurrentTime()
            var state = playerStatus
            socket.emit('get host data', {
                room: roomnum,
                currTime: currTime,
                state: state,
                caller: caller
            });
            break;
        default:
            console.log("Error invalid player id")
    }
});

// Create Youtube Player
socket.on('createYoutube', function(data) {
    if (currPlayer != 0) {

        var you = document.getElementById('playerArea');
        you.style.display = 'block';
        currPlayer = 0

        // The visual queue
        document.getElementById('visual-queue').style.display = 'block'
        document.getElementById('queue-arrows').style.display = 'block'
        document.getElementById('beta-message').style.display = 'none'
        document.getElementById('enqueueButton').style.display = 'inline-block'
        document.getElementById('emptyButton').style.display = 'inline-block'
        document.getElementById('nextButton').style.display = 'inline-block'
        document.getElementById('loveButton').style.display = 'inline-block'
        // document.getElementById('html5-input').style.display = 'none'
        document.getElementById('inputVideoId').placeholder = 'Video ID / URL'
        // document.getElementById('html5-message').style.display = 'none'

        console.log("Player state: " + playerStatus)
        // If it is -1, there was an error and needs to resync to host
        if (playerStatus == -1) {
            socket.emit('get video', function(id) {
                player.loadVideoById(id);
                // Auto sync with host after 1000ms of changing video
                setTimeout(function() {
                    socket.emit('sync host', {});
                }, 1000);
            })
        }
    }
});
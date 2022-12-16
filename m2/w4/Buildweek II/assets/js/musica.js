// Select all the elements in the HTML page
// and assign them to a variable
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
let iconaPlay=document.querySelector('#icona-play-album')

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');
var session = sessionStorage.getItem('album');
// if (!session) {
//     session = 75621062;
// }
function caricaMusica(track_index,controllo) {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${session}`).then(function (response) {
        return response.json();
    }).then(function (json) {
        var track_list = json.tracks.data;

        playpause_btn.addEventListener('click', () => {
            playpauseTrack();
        })
        iconaPlay.addEventListener('click', () => {
            playpauseTrack();
        })
        seek_slider.addEventListener('change', () => {
            seekTo();
        })
        volume_slider.addEventListener('change', () => {
            setVolume();
        })
        next_btn.addEventListener('click', () => {
            nextTrack();
        })
        prev_btn.addEventListener('click', () => {
            prevTrack();
        })
        if(controllo!=1)
        {
            track_index=0;
        }
        function loadTrack(track_index) {
            // Clear the previous seek timer
            clearInterval(updateTimer);
            resetValues();

            // Load a new track
            curr_track.src = track_list[track_index].preview;
            curr_track.load();
            if(controllo==1){
                playTrack();
            }
            // Update details of the track
            track_art.style.backgroundImage =
                `url(" ${track_list[track_index].album.cover} ")`;
            track_name.textContent = track_list[track_index].title_short;
            track_artist.textContent = track_list[track_index].artist.name;

            // Set an interval of 1000 milliseconds
            // for updating the seek slider
            updateTimer = setInterval(seekUpdate, 1000);

            // Move to the next track if the current finishes playing
            // using the 'ended' event
            curr_track.addEventListener("ended", nextTrack);

            // // Apply a random background color
            // random_bg_color();
            // }

            // function random_bg_color() {
            // // Get a random number between 64 to 256
            // // (for getting lighter colors)
            // let red = Math.floor(Math.random() * 256) + 64;
            // let green = Math.floor(Math.random() * 256) + 64;
            // let blue = Math.floor(Math.random() * 256) + 64;

            // // Construct a color with the given values
            // let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";

            // // Set the background to the new color
            // document.body.style.background = bgColor;
            // }
        }
        // Function to reset all values to their default
        function resetValues() {
            curr_time.textContent = "00:00";
            total_duration.textContent = "00:00";
            seek_slider.value = 0;
        }

        function playpauseTrack() {
            // Switch between playing and pausing
            // depending on the current state
            if (!isPlaying) playTrack();
            else pauseTrack();
        }

        function playTrack() {
            // Play the loaded track
            curr_track.play();
            isPlaying = true;

            // Replace icon with the pause icon
            playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-2x"></i>';
            iconaPlay.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="d-lg-none mx-3 bi bi-shuffle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
                <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#1ed760" class="bi bi-pause-circle-fill text-success me-lg-4 manina" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
            </svg>
            `
        }

        function pauseTrack() {
            // Pause the loaded track
            curr_track.pause();
            isPlaying = false;

            // Replace icon with the play icon
            playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-2x"></i>';
            iconaPlay.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="d-lg-none mx-3 bi bi-shuffle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
                <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#1ed760"
            class="bi bi-play-circle-fill text-success me-lg-4 manina" viewBox="0 0 16 16">
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            </svg>
          `
        }

        function nextTrack() {
            // Go back to the first track if the
            // current one is the last in the track list
            if (track_index < track_list.length - 1)
                track_index += 1;
            else track_index = 0;

            // Load and play the new track
            loadTrack(track_index);
            playTrack();
        }

        function prevTrack() {
            // Go back to the last track if the
            // current one is the first in the track list
            if (track_index > 0)
                track_index -= 1;
            else track_index = track_list.length - 1;

            // Load and play the new track
            loadTrack(track_index);
            playTrack();
        }

        function seekTo() {
            // Calculate the seek position by the
            // percentage of the seek slider
            // and get the relative duration to the track
            seekto = curr_track.duration * (seek_slider.value / 100);

            // Set the current track position to the calculated seek position
            curr_track.currentTime = seekto;
        }

        function setVolume() {
            // Set the volume according to the
            // percentage of the volume slider set
            curr_track.volume = volume_slider.value / 100;
        }

        function seekUpdate() {
            let seekPosition = 0;

            // Check if the current track duration is a legible number
            if (!isNaN(curr_track.duration)) {
                seekPosition = curr_track.currentTime * (100 / curr_track.duration);
                seek_slider.value = seekPosition;

                // Calculate the time left and the total duration
                let currentMinutes = Math.floor(curr_track.currentTime / 60);
                let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
                let durationMinutes = Math.floor(curr_track.duration / 60);
                let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

                // Add a zero to the single digit time values
                if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
                if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
                if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
                if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

                // Display the updated duration
                curr_time.textContent = currentMinutes + ":" + currentSeconds;
                total_duration.textContent = durationMinutes + ":" + durationSeconds;
            }
        }
        loadTrack(track_index);
    })
    // Load the first track in the tracklist
}
function chiamataCanzone(variabile) {
    caricaMusica(variabile,1)
    caricaMusica(variabile,1)
}
window.addEventListener('load', caricaMusica)

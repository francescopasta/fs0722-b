window.addEventListener('load', caricaContenuto);
function caricaContenuto() {
    const div = document.querySelector('tbody');
    const prof = document.querySelector('#band_profile');
    const sup = document.querySelector('#sez_sup');
    const session = sessionStorage.getItem('album');
    console.log(session);
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${session}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (band) {
            sup.innerHTML = `
        <div class='d-flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#00f" class="bi bi-patch-check-fill me-2 mt-1" viewBox="0 0 16 16">
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
            </svg>
            <p class='align-self-center'>Artista verificato</p>
        </div>
        <h1>${band.name}</h1>
        <p>${band.nb_fan} ascoltatori seriali</p>
    `
            sup.style.background = `url(${band.picture_xl})`;
            sup.style.backgroundPosition=`center`;
            sup.style.backgroundSize=`cover`;
            sup.style.backgroundRepeat=`no-repeat`;
            return fetch(band.tracklist)
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (album) {
            for (let i = 0; i < album.data.length; i++) {
                let minuti2 = Math.floor(album.data[i].duration / 60);
                let secondi2 = album.data[i].duration % 60;
                if(secondi2<10){
                secondi2=`0${secondi2}`;
                }
                div.innerHTML +=
                    `<tr>
                    <td class="text-end mostra_tabella"><h5 class="m-0">${i + 1}</h5></td>
                    <td><img src="${album.data[i].album.cover_small}" onclick="getId(${album.data[i].album.id})" class="manina" alt="cover-album"></td>
                    <td><h4 class="m-0 manina" onclick="chiamataCanzone(${i})">${album.data[i].title}</h4></td>
                    <td class="d-lg-none"><i class="bi bi-three-dots-vertical"></i></td>
                    <td class="text-end mostra_tabella d-none d-lg-table-cell"><p class="m-0">${album.data[i].rank}</p></td>
                    <td class="text-end mostra_tabella d-none d-lg-table-cell"><p class="m-0">${minuti2}:${secondi2}</p></td>
                </tr>`
            };
            prof.innerHTML = `
            <tr>
                <td><img src="${album.data[0].contributors[0].picture}" alt="band_profile" class="rounded-circle"></td>
                <td><h4>Hai messo Mi piace a ${Math.floor(Math.random() * 21)} Brani</h4><p>Di  ${album.data[0].artist.name}</p></td>
            </tr>
        `;
        })
        .catch(function (error) {
            console.log('Requestfailed', error)
        });
}

let button = document.querySelector('#follow')
let counter = 0
button.classList.add('on')

button.addEventListener('click', () => {
    if (counter == 0) {
        button.textContent = 'Following'
        counter = 1
        button.classList.remove('on')
    } else {
        button.textContent = 'Segui'
        counter = 0
        button.classList.add('on')
    }
})

//esperimenti musica da qua

// Select all the elements in the HTML page
// and assign them to a variable
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
let iconaPlay=document.querySelector('#icona-play')

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
function caricaMusica(track_index, controllo) {
    const session2 = sessionStorage.getItem('album');
    console.log(session2);
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${session2}`).then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json)
        return fetch(json.tracklist)
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (album) {
            var track_list = album.data;
            console.log(track_list);
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
            if (controllo != 1) {
                track_index = 0;
            }
            function loadTrack(track_index) {
                // Clear the previous seek timer
                clearInterval(updateTimer);
                resetValues();

                // Load a new track
                curr_track.src = track_list[track_index].preview;
                curr_track.load();
                if (controllo == 1) {
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
                iconaPlay.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="#1ed760" class="bi bi-pause-circle-fill text-success me-5 manina" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>
                </svg>`
            }

            function pauseTrack() {
                // Pause the loaded track
                curr_track.pause();
                isPlaying = false;

                // Replace icon with the play icon
                playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-2x"></i>';
                iconaPlay.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="#1ed760"
                class="bi bi-play-circle-fill text-success me-5 manina" viewBox="0 0 16 16">
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
              </svg>`
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
    caricaMusica(variabile, 1)
    caricaMusica(variabile, 1)
    playTrack();
}
function getId(id) {
    window.location.href = "album.html"
    sessionStorage.setItem('album', JSON.stringify(id))
}
function chiamaRicerca(){
    window.location.href = "search.html"
}
function coloraVerde(cuore) {
    if (cuore.classList.contains('verdino')) {
        cuore.classList.remove('verdino');
        cuore.classList.remove('bi-heart-fill');
        cuore.classList.add('bi-heart');
    }
    else {
        cuore.classList.add('verdino');
        cuore.classList.remove('bi-heart');
        cuore.classList.add('bi-heart-fill');
    }
}
window.addEventListener('load', caricaMusica)

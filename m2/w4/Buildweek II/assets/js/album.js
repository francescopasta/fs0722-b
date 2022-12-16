window.addEventListener('load', caricaContenuto);
function caricaContenuto() {
    const div = document.querySelector('tbody');
    const head = document.querySelector('#album_head')
    const session = sessionStorage.getItem('album')
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${session}`).then(function (response) {
        return response.json();
    }).then(function (json) {
        let album = json;
        console.log(album)
        let year = (album.release_date).substring(0,4)
        let minuti = Math.floor(album.duration / 60)
        let secondi = album.duration % 60
        head.innerHTML = `
        <div class="col-12 bg-transparent text-white pb-3">
            <div class="w-100 d-flex flex-column flex-lg-row align-items-lg-end p-2">
            <img src="${album.cover_big}" class="img-album card-img-top border border-dark shadow" alt="#">
            <div class="card-body w-100 pt-5 pt-lg-0 px-lg-3">
                <p class="fw-bold d-none d-lg-block">ALBUM</p>
                <h1 class="display-5 fw-bold card-title pt-1 pb-4">${album.title}</h1>
                <div class="card-text w-100 d-flex"><img src="${album.contributors[0].picture_small}" class="img-piccola"
                    alt="#">
                <p class="card-text ps-2"><span class="fw-bold manina" onclick="getIdArtist(${album.artist.id})"> ${album.artist.name}</span> - ${year} - <span class="fw-bold">${album.nb_tracks} brani</span>,  <span class="opacity-50">${minuti}min ${secondi}sec</span>.</p>
                </div>

            </div>
            </div>
        </div>
        `
        for (let i = 0; i < album.tracks.data.length; i++) {
            let minuti2 = Math.floor(album.tracks.data[i].duration / 60);
            let secondi2 = album.tracks.data[i].duration % 60;
            if(secondi2<10){
                secondi2=`0${secondi2}`;
            }
            div.innerHTML +=
                `<tr class="hover-album">
                    <td colspan="0.5" class="d-none d-lg-table-cell text-end mostra_tabella">${i + 1}</td>
                    <td><p class="m-0 fw-bold manina" onclick="chiamataCanzone(${i})">${album.tracks.data[i].title}</p><p class="m-0 fw-light manina" onclick="getIdArtist(${album.artist.id})">${album.tracks.data[i].artist.name}</p></td>
                    <td class="d-none d-lg-table-cell text-end mostra_tabella">${album.tracks.data[i].rank}</td>
                    <td class="text-end d-lg-none text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                     <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    </svg>
                    </td>
                    <td class="d-none d-lg-table-cell text-end mostra_tabella">${minuti2}:${secondi2}</td>
                </tr>`

        }
    });
}
function chiamaRicerca(){
    window.location.href = "search.html"
}

function getIdArtist(id) {
    window.location.href = "artist.html"
    sessionStorage.setItem('album', JSON.stringify(id))
}

let cuore = document.querySelector('.fill_heart') 
let counter = 0
cuore.style.cursor = 'pointer'
cuore.addEventListener('click', ()=>{
    if (counter == 0) {
        cuore.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#1ed760" class="bi bi-heart-fill me-3" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
        `
        counter = 1
    } else {
        cuore.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart me-3"
        viewBox="0 0 16 16">
        <path
            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
        </svg>
        `
        counter = 0
    }
})
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

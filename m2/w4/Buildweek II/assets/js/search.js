function cercaArtista(){
let ricerca=document.querySelector('#cerca')
console.log(ricerca);
ricerca.addEventListener("keydown",function(event){
    console.log(event.key)
    if(event.key === "Enter")
{
    document.querySelector('#bottone-ricerca-search').click();
}});
let stampa=document.querySelector('#pagina-search');
chiamaJson(ricerca.value);
function chiamaJson(numero) {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${numero}`)
    .then(function (response) {
        return response.json()
    })
    .then(function(album){
        if(album.data.length>0){
        stampa.innerHTML='';
        for(let i=0;i<12;i++)
        {
            stampa.innerHTML +=`
            <div class="col-6 col-lg-3 my-5">
            <div class="card d-flex flex-column justify-content-center align-items-center manina h-100">
            <img src="${album.data[i].album.cover_medium}" class="card-img-top mb-1" alt="#" onclick="getId(${album.data[i].album.id})">
            <h5 class="card-title w-75 text-truncate text-center" onclick="getId(${album.data[i].album.id})">${album.data[i].title}</h5>
            <p class="card-text w-75 text-truncate pb-3 text-center" onclick="getId(${album.data[i].album.id})">${album.data[i].album.title}</p>
            <p  class="card-text w-75 text-truncate pb-3 text-center sottolinea" onclick=getArtistId(${album.data[i].artist.id})>${album.data[i].artist.name}</p>
            </div>
            </div>
            
            
            `
        }
        
        
        
      


    }
        // return album.data[0].artist.id;
    })
    // .then(function(id){
    //     console.log(id);
    //     window.location.href = "artist.html"
    //     sessionStorage.setItem('album', JSON.stringify(id))
    // })
}
}
function getId(id) {
    window.location.href = "album.html"
    sessionStorage.setItem('album', JSON.stringify(id))
}

function getArtistId(id) {
    window.location.href = "artist.html"
    sessionStorage.setItem('album', JSON.stringify(id))
}
cercaArtista();

function resetInput() {
    document.querySelector('#cerca').value = ''
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
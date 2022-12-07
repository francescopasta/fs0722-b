if(localStorage){
    let li = document.createElement('li')   
    li.classList.add('newLi')

    li.innerHTML = localStorage.getItem('valore')
    
    let del = document.createElement('svg')
    del.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
           </svg>`
    del.addEventListener('mouseover', () => {
        del.style = 'cursor: pointer'
    })
    
    li.append(del)
    document.querySelector('#lista').append(li)

    li.addEventListener('click', () => {
        li.classList.add('doneLi')
    })
    
    del.addEventListener('click', () => {
        localStorage.removeItem('valore')
    })
    
    document.querySelector('#btn').addEventListener('click', () => {
   
        let li = document.createElement('li')   
        li.classList.add('newLi')
     
        let tGet = document.querySelector('#put')
        let text = tGet.value
        localStorage.setItem('valore', text)
    
        li.innerHTML = localStorage.getItem('valore')
     
        let del = document.createElement('svg')
        del.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
               </svg>`
        del.addEventListener('mouseover', () => {
            del.style = 'cursor: pointer'
        })
     
        li.append(del)
        document.querySelector('#lista').append(li)
     
        tGet.value = ''
     
        li.addEventListener('click', () => {
         li.classList.add('doneLi')
        })
     
        del.addEventListener('click', () => {
            document.querySelector('#lista').removeChild(li)
        })  
    })

} else {
    document.querySelector('#btn').addEventListener('click', () => {
   
    let li = document.createElement('li')   
    li.classList.add('newLi')
 
    let tGet = document.querySelector('#put')
    let text = tGet.value
    localStorage.setItem('valore', text)

    li.innerHTML = localStorage.getItem('valore')
 
    let del = document.createElement('svg')
    del.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
           </svg>`
    del.addEventListener('mouseover', () => {
        del.style = 'cursor: pointer'
    })
 
    li.append(del)
    document.querySelector('#lista').append(li)
 
    tGet.value = ''
 
    li.addEventListener('click', () => {
     li.classList.add('doneLi')
    })
 
    del.addEventListener('click', () => {
        document.querySelector('#lista').removeChild(li)
    })  
    })
}




// document.querySelector('#btn').addEventListener('click', () => {
//     let inputVal = document.querySelector('#put').value
//     let valori = []
//     valori.push(inputVal)
//     localStorage.ultimo_pensiero += valori
// })

// salvaIlDato = function(info_da_salvare){
    //     localStorage.ultimo_pensiero = info_da_salvare
    //     alert('Memorizzazione Effettuata')
    // }
    // recuperaIlDato = function(elemento){
    //     if(confirm("Sostituire il contenuto attuale con l'ultimo pensiero caricato?")){
    //         elemento.value = localStorage.ultimo_pensiero
    //     }
    // }

(async function getFetch() {
    let response = await fetch("users.json")
    if(response){
        let datiJson = await response.json()
        for (let i = 0; i < datiJson.length; i++) {
            document.querySelector('.container').innerHTML += `
            <div class="card m-3 text-center cambiamenti" style="width: 18rem;">
                    <div class="card-body img">
                    <img src= ${datiJson[i].profileURL} class="card-img-top" alt="persona-logo">
                    </div>
                    <div class="card-body">
                    <p class="card-text">${datiJson[i].firstName} ${datiJson[i].lastName}</p>
                    <a href="#" class="card-link">${datiJson[i].email}</a>
                    </div>
                </div>
            `
        }
    } else {
        console.log("'error' - couldn't reach fetch data")
    }
}) ();

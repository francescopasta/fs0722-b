let contenitore = document.querySelector('#stelleDiv')
let active = -1

for (let i = 0; i < 10; i++) {
    let starImg = document.createElement('img')
    starImg.src ='Assets/star_dark.svg'
    starImg.classList.add('star-style')
    contenitore.appendChild(starImg)

    starImg.addEventListener('mouseover', () =>onStarHover(i))
    starImg.addEventListener('mouseleave', () =>onStarOut())
    starImg.addEventListener('click', () => {
        if(i != active){
            onStarClick(i)
        } else {
            offStar()
        }    
    })
}

let stars = document.querySelectorAll(".star-style")


    function onStarHover(a) {
        fill(a)
    }

    function fill(ratingVall) {
        for (let i = 0; i < 10; i++) {
            if(i <= ratingVall) {
                stars[i].src = "Assets/star.svg"
            }else{
                stars[i].src = 'Assets/star_dark.svg'
            }
        }
    }

    function onStarOut() {
        fill(active)
    }

    function onStarClick(a) {
        active = a
        fill(active)
    }

    function offStar() {
        active = - 10
        fill(active)
    }

    function daiVoto() {
        let linkFinale = document.getElementById('link-finale');
        if (active != -1 && active != -10) {
            linkFinale.setAttribute('href', 'https://www.epicode.com');
        } else {
            linkFinale.setAttribute('href', '#');
            alert('Dai un Feedback per proseguire');
        }
    }
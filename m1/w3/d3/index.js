document.querySelector('#btn').addEventListener('click', () => {
   
   let li = document.createElement('li')
   li.classList.add('newLi')

   let tGet = document.querySelector('#put')
   let text = tGet.value
   let doneText = text.substring(0,1).toUpperCase() + text.substring(1,text.length)

   let del = document.createElement('img')
   del.src = 'img/delete.svg'
   del.classList.add('img')

   li.append(doneText, del)
   document.querySelector('#lista').append(li)

   tGet.value = ''

   li.addEventListener('click', () => {
    li.classList.add('doneLi')
   })

   del.addEventListener('click', () => {
    document.querySelector('#lista').removeChild(li)
   })
   
})
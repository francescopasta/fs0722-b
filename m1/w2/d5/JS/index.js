let num = document.getElementById("num")

        function aggiungiNumero(button){
            let element = button.getAttribute('data-num')
            num.value += element

        if (element == " + " || element == " - "  || element == " * " || element == " / " || element == "." || element == "Math.PI "){

            let stringa = num.value.element(0, num.length - 1) + e.target.innerHTML
            num.value = stringa

        }
        }

        function tot(){
           num.value = eval(num.value);
        }  

        function restore(){
            num.value = null
        }

        function del(){
            let string = num.value.split("")
            string.pop()
            num.value = string.join("")
        }

        function changeOfSign(){

            if(num.value > 0){ 
            num.value = '- ' + num.value
            } else {
                num.value = '+ ' + num.value
            }

        /*for(numero of num){

            let numeri = []
            numeri.push(numero)

              if(numeri[0] > 0){
                num.value = '- ' + num.value
              } else if(num.value[0] < 0){
                    numeri.forEach(element => {
                        if(element > 0){
                            num.value = '- ' + num.value
                        } else {
                            num.value = '+ ' + num.value
                        }
                    })
                } else {

                
            }*/
            
        }

        function xSup2(){
            num.value = Math.pow(eval(num.value), 2)
        }

          function radice(){
           num.value = Math.sqrt(eval(num.value))
        }

        function logaritmoE(){
            num.value = Math.log(eval(num.value))
        }

        function logaritmo10(button){
            num.value = Math.log10(eval(num.value))
        }

        function parentesi(){
            num.value = '(' + num.value + ')'
        }
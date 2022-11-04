let num = document.getElementById("num")

        function aggiungiNumero(button){
            let element = button.getAttribute('data-num')
            num.value += element
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
            if(num.value >= 0){ 
            num.value = '- ' + num.value
            } else{
                num.value = '+ ' + eval(num.value)
            }
        }

        function funzioni(questo){
            let it = questo.getAttribute('data-num')
            num.value = eval(it + '(' + eval(num.value) + ')')
        }

        function xSup2(){
            num.value = Math.pow(eval(num.value), 2)
        }

        function parentesi(){
            num.value = '(' + num.value + ')'
        }
      
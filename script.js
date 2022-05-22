const out = document.querySelector('#item1')

const li = document.querySelectorAll('.item')
let btncnt 
let b = []
let res



for (let i = 0; i < li.length; i++) {
   li[i].addEventListener('click', (e)=>{
       btncnt = e.target.value

       
 

    if(btncnt == 'AC'){
        out.value = ''
    }
 
    else if(btncnt == '='){
         console.log(out.value)
         res =  Function("return " + out.value)()
         out.value = res
 
    }
 
    else{
     out.value += btncnt
    }
       
   })

   
}
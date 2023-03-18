const input = document.querySelector('#texto');
const resultado = document.querySelector('#resultado');
const button = document.querySelector('.btn');

button.addEventListener('click', function() {
    const texto = input.value.toLowerCase();//add toLowerCase() if the user enter Upper case words
    let backwardsTexto = ""////Initialize the backward variable

    for (let i = texto.length -1; i >= 0; i--){
        backwardsTexto = backwardsTexto + texto[i] //Variable that store the word backwards
    }
    //Conditionals to evaluate if the word texto is a palindrome or not
    if(backwardsTexto === texto){
        return resultado.textContent = `La palaba ${input.value}, es un palindromo`
     }else{
         return resultado.textContent = `La palabra ${input.value}, no es un palindromo`
    }     
    
});

//Success




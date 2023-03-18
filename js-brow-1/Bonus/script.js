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
        resultado.textContent = `La palaba ${input.value}, es un palindromo`
        resultado.classList.remove("red-flashy");
        resultado.classList.add("flashy");
     }else{
        resultado.textContent = `La palabra ${input.value}, no es un palindromo`
        resultado.classList.remove("flashy");
        resultado.classList.add("red-flashy");
    }     
    // Remove flashy or red flashy lights after 5 seconds
    setTimeout(() => {
        resultado.classList.remove("flashy");
        resultado.classList.remove("red-flashy");
    }, 5000);
    
});

//Success




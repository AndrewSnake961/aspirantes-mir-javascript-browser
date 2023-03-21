const input = document.querySelector('#texto');
const resultado = document.querySelector('#resultado');
const button = document.querySelector('.btn');
const resultadoMayusculas = document.querySelector('#resultadoMayusculas');



input.addEventListener('input', function() {
    const texto = input.value.toUpperCase()// Código para convertir el texto a mayúsculas y mostrarlo en el párrafo
    resultado.textContent = texto// Código para mostrar el texto en el párrafo
    
});

button.addEventListener('click', function() {
    const texto = input.value.toUpperCase();
    resultadoMayusculas.textContent = texto;
});

//Success








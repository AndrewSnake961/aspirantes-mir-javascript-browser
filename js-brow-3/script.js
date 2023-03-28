// Obtener elementos del DOM
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const section = document.querySelector('section');

// Manejar el evento de enviar el formulario
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userData = {
    name: nameInput.value,
    email: emailInput.value,
  };
  localStorage.setItem('userData', JSON.stringify(userData));
  showData();
});

// Función para mostrar el nombre y correo electrónico guardados en localStorage
function showData() {
  const storedData = JSON.parse(localStorage.getItem('userData'));
  if (storedData) {
    section.innerHTML = `
      <p>Nombre: ${storedData.name}</p>
      <p>Correo electrónico: ${storedData.email}</p>
      <button id="delete-btn">Borrar datos</button>
    `;
    const deleteBtn = document.getElementById('delete-btn');
    deleteBtn.addEventListener('click', deleteData);
  } else {
    section.innerHTML = '<p>No hay datos almacenados.</p>';
  }
}

// Función para borrar los datos guardados en localStorage
function deleteData() {
  localStorage.removeItem('userData');
  showData();
}

// Mostrar los datos guardados al cargar la página
showData();

//Success - Bonus Incluido
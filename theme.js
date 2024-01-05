// Obtener referencias a las imágenes
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');
const moonIconBar = document.getElementById('moonIconBar');
const sunIconBar = document.getElementById('sunIconBar');
const sunContainer = document.getElementById('sunContainer');

// Agregar evento click para el icono de la luna
// Función para cambiar a modo oscuro
function switchToDarkMode() {
  document.body.style.backgroundColor = '#000';
  sidebar.style.backgroundColor = '#808080';
  btnToggle.style.color = '#fff';  // Establecer color blanco al texto
  
  // Cambiar estilos para los elementos específicos
  const elementsToChange = document.querySelectorAll('h1, p, li');
  elementsToChange.forEach(element => {
    element.style.color = '#fff';  // Establecer color blanco
  });
 
  console.log('Switching to dark mode')
}
// Agregar evento click para el icono de la luna
moonIcon.addEventListener('click', switchToDarkMode);
moonIconBar.addEventListener('click', switchToDarkMode)


// Agregar evento click para el icono del sol
sunIcon.addEventListener('click', function() {
// Cambiar el color de fondo del body a blanco
document.body.style.backgroundColor = '#F2F9FE';
btnToggle.style.color = '#000';
 // Cambiar estilos para los elementos específicos
 const elementsToChange = document.querySelectorAll('h1, p, li');
 elementsToChange.forEach(element => {
   element.style.color = '#000';  // Establecer color blanco
 });
 console.log('Switching to light mode')
});
// Agregar evento click para el icono del sol
sunIconBar.addEventListener('click', function() {
  // Cambiar el color de fondo del body a blanco
  document.body.style.backgroundColor = '#F2F9FE';
  sidebar.style.backgroundColor = '#FFFFFF';
  btnToggle.style.color = '#000'; 
   // Cambiar estilos para los elementos específicos
   const elementsToChange = document.querySelectorAll('h1, p, li');
   elementsToChange.forEach(element => {
     element.style.color = '#000';  // Establecer color blanco
   });
   console.log('Switching to light mode')
  });
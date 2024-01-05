// Seleccionar el toggle
const btnToggle = document.querySelector('.toggle-btn');
const btnClose = document.querySelector('.close-btn');
const sidebar = document.getElementById('sidebar'); 
const btnTheme = document.querySelector('.head-img');

// Agregamos evento de escucha al hacer clic
btnToggle.addEventListener('click', function() {
     // Oculta el toggle-btn al hacer clic
    btnToggle.style.visibility = 'hidden';
    
    // Muestra el sidebar al hacer clic
    sidebar.classList.add('active');

    
});
 btnClose.addEventListener('click', function(){
  //temporizador
  sidebar.classList.remove('active')
  setTimeout(function() {
    btnToggle.style.visibility = 'visible';
}, 500);
 })

 function toggleMode() {
  const container = document.querySelector('.head-img');
  
  // Si el contenedor tiene la clase 'active', la elimina; de lo contrario, la añade
  if (container.classList.contains('active')) {
    container.classList.remove('active');
  } else {
    container.classList.add('active');
  }
}
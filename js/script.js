// ===== 1. MENÚ HAMBURGUESA: abre y cierra la lista de enlaces =====
const boton = document.getElementById('boton-menu');
const enlaces = document.getElementById('enlaces');
boton.onclick = () => enlaces.classList.toggle('abierto');
enlaces.onclick = () => enlaces.classList.remove('abierto'); // se cierra al elegir una sección

// ===== 2. FORMULARIO: todavía no hay servidor, así que solo avisa =====
document.getElementById('formulario').onsubmit = (e) => {
  e.preventDefault();
  document.getElementById('aviso').textContent = 'El formulario aún no está conectado a un servidor, por eso el mensaje no se envió.';
};

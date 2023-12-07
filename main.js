let cuerda = document.querySelector('#cuerda');
let percusion = document.querySelector('#percusion');
let viento = document.querySelector('#viento');

let sonidoCuerda = new Audio('./sounds/guitarra.mp3');
let sonidoPercusion = new Audio('./sounds/bateria.mp3');
let sonidoViento = new Audio('./sounds/trompeta.mp3');

function tiempoReproduccion() {
  setTimeout(function () {
    sonidoCuerda.pause();
    sonidoPercusion.pause();
    sonidoViento.pause();
    sonidoCuerda.currentTime = 0; // Reinicia la reproducción al principio
    sonidoPercusion.currentTime = 0;
    sonidoViento.currentTime = 0;
  }, 5000);
}

cuerda.onclick = function () {
  sonidoCuerda.loop = false;
  sonidoCuerda.play();

  tiempoReproduccion();
};

percusion.onclick = function () {
  sonidoPercusion.loop = false;
  sonidoPercusion.play();

  tiempoReproduccion();
};

viento.onclick = function () {
  sonidoViento.loop = false;
  sonidoViento.play();

  tiempoReproduccion();
};

/* TODO: función parar reproducción */

function reproducirConTeclaC(tecla) {
  if (tecla.key === 'C' || tecla.key === 'c') {
    sonidoCuerda.play();
    tiempoReproduccion();
  }
}

function reproducirConTeclaP(tecla) {
  if (tecla.key === 'P' || tecla.key === 'p') {
    sonidoPercusion.play();
    tiempoReproduccion();
  }
}

function reproducirConTeclaV(tecla) {
  if (tecla.key === 'V' || tecla.key === 'v') {
    sonidoViento.play();
    tiempoReproduccion();
  }
}

document.addEventListener('keydown', reproducirConTeclaC);
document.addEventListener('keydown', reproducirConTeclaP);
document.addEventListener('keydown', reproducirConTeclaV);

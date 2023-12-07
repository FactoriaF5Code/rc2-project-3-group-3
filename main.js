let cuerda = document.querySelector('#cuerda');
let percusion = document.querySelector('#percusion');
let viento = document.querySelector('#viento');

let sonidoCuerda = new Audio('./sounds/guitarra.mp3');
let sonidoPercusion = new Audio('./sounds/bateria.mp3');
let sonidoViento = new Audio('./sounds/trompeta.mp3');

cuerda.onclick = function () {
  sonidoCuerda.loop = false;
  sonidoCuerda.play();

  setTimeout(function () {
    sonidoCuerda.pause();
    sonidoCuerda.currentTime = 0; // Reinicia la reproducción al principio
  }, 5000);
};

percusion.onclick = function () {
  sonidoPercusion.loop = false;
  sonidoPercusion.play();

  setTimeout(function () {
    sonidoPercusion.pause();
    sonidoPercusion.currentTime = 0; // Reinicia la reproducción al principio
  }, 5000);
};

viento.onclick = function () {
  sonidoViento.loop = false;
  sonidoViento.play();

  setTimeout(function () {
    sonidoViento.pause();
    sonidoViento.currentTime = 0; // Reinicia la reproducción al principio
  }, 5000);
};

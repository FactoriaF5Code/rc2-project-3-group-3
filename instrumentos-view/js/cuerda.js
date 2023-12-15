let violin = document.querySelector("#violin");
let guitarra = document.querySelector("#guitarra");
let bajo = document.querySelector("#bajo");
let banjo = document.querySelector("#banjo");
let violoncello = document.querySelector("#violoncello");
let arpa = document.querySelector("#arpa");

let sonidoViolin = new Audio("../sounds/sonidos-cuerda/violin.mp3");
let sonidoGuitarra = new Audio("../sounds/sonidos-cuerda/guitarra-electrica.mp3");
let sonidoBajo = new Audio("../sounds/sonidos-cuerda/bajo.mp3");
let sonidoBanjo = new Audio("../sounds/sonidos-cuerda/banjo.mp3");
let sonidoVioloncello = new Audio("../sounds/sonidos-cuerda/violoncello.mp3");
let sonidoArpa = new Audio("../sounds/sonidos-cuerda/arpa.mp3");


violin.onmouseover = function () {
  sonidoViolin.loop = false;
  sonidoViolin.play();
};

violin.onmouseout = function () {
  sonidoViolin.pause();
};

guitarra.onmouseover = function () {
  sonidoGuitarra.loop = false;
  sonidoGuitarra.play();
};

guitarra.onmouseout = function () {
  sonidoGuitarra.pause();
};

bajo.onmouseover = function () {
  sonidoBajo.loop = false;
  sonidoBajo.play();
};

bajo.onmouseout = function () {
  sonidoBajo.pause();
};

banjo.onmouseover = function () {
  sonidoBanjo.loop = false;
  sonidoBanjo.play();
};

banjo.onmouseout = function () {
  sonidoBanjo.pause();
};

violoncello.onmouseover = function () {
  sonidoVioloncello.loop = false;
  sonidoVioloncello.play();
};

violoncello.onmouseout = function () {
  sonidoVioloncello.pause();
};

arpa.onmouseover = function () {
  sonidoArpa.loop = false;
  sonidoArpa.play();
};

arpa.onmouseout = function () {
  sonidoArpa.pause();
};




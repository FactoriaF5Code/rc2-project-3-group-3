/* variables cuerda */
/* let violin = document.querySelector("#violin");
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
let sonidoArpa = new Audio("../sounds/sonidos-cuerda/arpa.mp3"); */
/* variables percusión */
/* let bombo = document.querySelector("#bombo");
let gong = document.querySelector("#gong");
let platillos = document.querySelector("#platillos");
let xilofono = document.querySelector("#xilofono"); */



/* let sonidoBombo = new Audio("../sounds/sonidos-percusion/bombo.mp3");
let sonidoGong = new Audio("../sounds/sonidos-percusion/gong.mp3");
let sonidoPlatillos = new Audio("../sounds/sonidos-percusion/platillos.mp3");
let sonidoXilofono = new Audio("../sounds/sonidos-percusion/xilofono.mp3"); */

/* variables viento */

/* funciones cuerda */

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

let caja = document.querySelector("#caja");
let sonidoCaja = new Audio("../sounds/sonidos-percusion/caja.mp3");
/* funciones percusión */
caja.onmouseover = function () {
  sonidoCaja.loop = false;
  sonidoCaja.play();
  
};

caja.onmouseout = function () {
  sonidoCaja.pause();
};


/* funciones viento */
let violin = document.querySelector("#violin");
let guitarra = document.querySelector("#guitarra");
let bajo = document.querySelector("#bajo");
let banjo = document.querySelector("#banjo");
let violoncello = document.querySelector("#violoncello");
let arpa = document.querySelector("#arpa");

let sonidoViolin = new Audio("./sounds/violin.mp3");
let sonidoGuitarra = new Audio("../sounds/sonidos-cuerda/guitarra.mp3");
let sonidoBajo = new Audio("./sounds/bajo.mp3");
let sonidoBanjo = new Audio("./sounds/banjo.mp3");
let sonidoVioloncello = new Audio("./sounds/violoncello.mp3");
let sonidoArpa = new Audio("./sounds/arpa.mp3");



  guitarra.onmouseover = function () {
    sonidoGuitarra.loop = false;
    sonidoGuitarra.play();
  
    
  };
  
  guitarra.onmouseout = function(){
    sonidoGuitarra.pause();

  }
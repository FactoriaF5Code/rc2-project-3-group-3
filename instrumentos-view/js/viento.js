
let saxofon = document.querySelector("#saxofon");
let flauta = document.querySelector("#flauta");
let oboe = document.querySelector("#oboe");
let gaita = document.querySelector("#gaita");
let trompeta = document.querySelector("#trompeta");
let acordeon = document.querySelector("#acordeon");

let sonidoSaxofon = new Audio("../sounds/sonidos-viento/saxofon.mp3");
let sonidoFlauta = new Audio("../sounds/sonidos-viento/flauta.mp3");
let sonidoOboe = new Audio("../sounds/sonidos-viento/oboe.mp3");
let sonidoGaita = new Audio("../sounds/sonidos-viento/gaita.mp3");
let sonidoTrompeta = new Audio("../sounds/sonidos-viento/trompeta.mp3");
let sonidoAcordeon = new Audio("../sounds/sonidos-viento/acordeon.mp3");

saxofon.onmouseover = function () {
    sonidoSaxofon.loop = false;
    sonidoSaxofon.play();
    console.info("saxo")
};

saxofon.onmouseout = function () {
    sonidoSaxofon.pause();
};

flauta.onmouseover = function () {
    sonidoFlauta.loop = false;
    sonidoFlauta.play();
};

flauta.onmouseout = function () {
    sonidoFlauta.pause();
};

oboe.onmouseover = function () {
    sonidoOboe.loop = false;
    sonidoOboe.play();
};

oboe.onmouseout = function () {
    sonidoOboe.pause();
};

gaita.onmouseover = function () {
    sonidoGaita.loop = false;
    sonidoGaita.play();
};

gaita.onmouseout = function () {
    sonidoGaita.pause();
};

trompeta.onmouseover = function () {
    sonidoTrompeta.loop = false;
    sonidoTrompeta.play();
};

trompeta.onmouseout = function () {
    sonidoTrompeta.pause();
};

acordeon.onmouseover = function () {
    sonidoAcordeon.loop = false;
    sonidoAcordeon.play();
};

acordeon.onmouseout = function () {
    sonidoAcordeon.pause();
};


let caja = document.querySelector("#caja");
let bombo = document.querySelector("#bombo");
let gong = document.querySelector("#gong");
let platillos = document.querySelector("#platillos");
let xilofono = document.querySelector("#xilofono");

let sonidoCaja = new Audio("../sounds/sonidos-percusion/caja.mp3");
let sonidoBombo = new Audio("../sounds/sonidos-percusion/bombo.mp3");
let sonidoGong = new Audio("../sounds/sonidos-percusion/gong.mp3");
let sonidoPlatillos = new Audio("../sounds/sonidos-percusion/platillos.mp3");
let sonidoXilofono = new Audio("../sounds/sonidos-percusion/xilofono.mp3");

caja.onmouseover = function () {
    sonidoCaja.loop = false;
    sonidoCaja.play();
};

caja.onmouseout = function () {
    sonidoCaja.pause();
};

bombo.onmouseover = function () {
    sonidoBombo.loop = false;
    sonidoBombo.play();
};

bombo.onmouseout = function () {
    sonidoBombo.pause();
};

gong.onmouseover = function () {
    sonidoGong.loop = false;
    sonidoGong.play();
};

gong.onmouseout = function () {
    sonidoGong.pause();
};

platillos.onmouseover = function () {
    sonidoPlatillos.loop = false;
    sonidoPlatillos.play();
};

platillos.onmouseout = function () {
    sonidoPlatillos.pause();
};

xilofono.onmouseover = function () {
    sonidoXilofono.loop = false;
    sonidoXilofono.play();
};

xilofono.onmouseout = function () {
    sonidoXilofono.pause();
};

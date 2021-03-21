function randomNumber(n) {
    return Math.floor(Math.random() * n);
}

function cambiarColor() {
    let primarios = ["darkorange", "tomato", "mediumspringgreen", "gold", "orangered", "greenyellow"];
    nodoRaiz.style.setProperty("--main-color", primarios[randomNumber(primarios.length)]);
}


var nodoRaiz = document.documentElement;

cambiarColor();

var secciones = document.getElementsByTagName("section");
var id = setInterval(cambiarColor, 60000);


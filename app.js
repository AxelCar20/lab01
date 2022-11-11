console.log("hola");

function moverposicionrandom(elm){
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
}

let btnSi = document.getElementById("btn-si");
let btnNo = document.getElementById("btn-no");
let divContainer = document.getElementsByName("div_container")[0];
let imgd = document.getElementById("img-prueba");


btnNo.addEventListener('mouseenter', function(e) { 
    moverposicionrandom(e.target) 
});

btnSi.addEventListener('click', function(e) {
    alert("Sabía que ibas decir que sí");

    imgd.src = "img/img2.png";

})

//Comentario de prueba

console.log("Hola_mundo8");

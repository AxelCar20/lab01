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


window.addEventListener('beforeunload',(event) => {
    event.preventDefault();
    event.returnValue = "";
});

/*Practica*/
let arraynum = [95,30,82,15,35];
let promedioNota = 0;
let NotaMayor = 0;
let Notamenor = 0;
let NotasCantidad = arraynum.length;

//ordenamos el array
arraynum.sort();

//Buscamos el promedio
for(let i = 0; i <= arraynum.length-1; i++){
    promedioNota = promedioNota + arraynum[i];
}

promedioNota = (promedioNota/arraynum.length)

console.log("El promedio de las notas es de: " + promedioNota);
Notamenor = arraynum[0];
console.log("La nota menor obtenida es de: " + Notamenor);
NotaMayor = arraynum[arraynum.length-1];
console.log("La nota mayor obtenida es de: " + NotaMayor);






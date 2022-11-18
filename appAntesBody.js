//Al tocar click sobre la pantalla se hace la acción
window.onclick = function(){

    //Crea una serie de elementos por cada tag encontrado
    let encabezados = document.createElement("h1");
    const Text = document.createTextNode("Texto creado desde el js");

    //Se agrega al elemento ya existente
    encabezados.appendChild(Text);
    document.body.appendChild(encabezados);

}


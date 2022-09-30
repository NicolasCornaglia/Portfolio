window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let titleAdd = document.querySelector('.moviesAddTitulo')
    let titleInput = document.querySelector('#titulo')
    let estadoSecreto = 0;
    let palabra = 'secreto';

    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', function(){
        titleAdd.classList.toggle("color");
    })


    //PREG pq no funcionan las letras del teclado pero si el enter
    titleInput.addEventListener("keypress", function(e){
        let key = e.key;
        if (key == palabra[estadoSecreto]) {
            estadoSecreto++;
            if (estadoSecreto == (palabra.length)) {
                alert("SECRETO MAGICO!!")
            }
        } else {
            estadoSecreto=0;
        }


    })
}
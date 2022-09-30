window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
    let form = document.querySelector('.form')
    let titleInput = document.querySelector('input#title');
    let titleLabel = document.querySelector('.title-label')
    let titleError = document.querySelector('.title-error');
    let ratingInput = document.querySelector('#rating');
    let ratingError = document.querySelector('.rating-error');
    let awardsInput = document.querySelector('#awards');
    let awardsError = document.querySelector('.awards-error');
    let release_dateInput = document.querySelector('#release_date');
    let release_dateError = document.querySelector('.release_date-error');
    let lengthInput = document.querySelector('#length');
    let lengthError = document.querySelector('.length-error');
    let genreInput = document.querySelector('#genre_id');
    let genreError = document.querySelector('.genre-error');

    titleInput.focus();
    let errores = [];
    
/*     form.addEventListener('submit',(e) => {  
        e.preventDefault();
        if (titleInput.value == "" ) {
            titleInput.classList.add("is-invalid");
            errores.push("El titulo no puede estar vacío");
        } else {
            titleInput.classList.add("is-valid");    
        };
        if (ratingInput.value == "" ) {   
            ratingInput.classList.add("is-invalid");
            ratingInput.style.backgroundColor = "red";
            errores.push("El rating no puede estar vacío");
        };
        if (awardsInput.value == "" ) {           
            awardsInput.classList.add("is-invalid");
            errores.push("La cantidad de premios no puede estar vacía");
        };
        if (release_dateInput.value == ""  ) {            
            release_dateInput.classList.add("is-invalid");
            errores.push("La fecha de estreno no puede estar vacía");
        };
        if (lengthInput.value == "" ) {            
            lengthInput.classList.add("is-invalid");
            errores.push("La duración no puede estar vacía");
        };
        if (genreInput.value == ""  ) {           
            genreInput.classList.add("is-invalid");
            errores.push("El genero no puede estar vacío");
        };

        let ulErrores = document.querySelector('.errores');

        if (errores.length > 0) {
            e.preventDefault();
            errores.forEach(function (error) {
                ulErrores.innerHTML += "<li>" + error + "</li>"
            })
            ulErrores.classList.add('alert-warning');
        } else {
            alert("La película se guardó satisfactoriamente");
        };

        errores = [];  
    });  */

    let errores2 = {};

    titleInput.addEventListener("input", () => {
        if (titleInput.value == "") {
            titleLabel.classList.add("is-invalid");
            titleInput.classList.add("is-invalid");
            /* alert("El titulo no puede estar vacío"); */
            errores2.title = "El título no puede estar vacío"
            titleError.innerHTML += errores2.title;
            titleError.style.display = "block";
        } else {
            titleInput.classList.remove("is-invalid");
            titleLabel.classList.remove("is-invalid");
            titleInput.classList.add("is-valid");
            titleError.style.display = "none";
            titleError.innerHTML = "";
            
        }
    });

    ratingInput.addEventListener("input", () => {
        if (ratingInput.value < 2 || ratingInput.value > 10) {
            ratingInput.classList.add("is-invalid");
            /* alert("El rating debe estar entre 0 y 10"); */
            errores2.rating = "El rating debe estar entre 2 y 10"
            ratingError.innerHTML += errores2.rating;
            ratingError.style.display = "block";
        } else {
            ratingInput.classList.remove("is-invalid");
            ratingInput.classList.add("is-valid");
            ratingError.style.display = "none";
            ratingError.innerHTML = "";
        }
    });

    awardsInput.addEventListener("input", () => {
        if (awardsInput.value < 2 || awardsInput.value > 10) {
            awardsInput.classList.add("is-invalid");
            /* alert("La cantidad de premios debe ser entre 2 y 10"); */
            errores2.awards = "El rating debe estar entre 2 y 10"
            awardsError.innerHTML += errores2.awards;
            awardsError.style.display = "block";
        } else {
            awardsInput.classList.remove("is-invalid");
            awardsInput.classList.add("is-valid");
            awardsError.style.display = "none";
            awardsError.innerHTML = "";
        }
    });

    release_dateInput.addEventListener("input", () => {
        if (release_dateInput.value == "") {
            release_dateInput.classList.add("is-invalid");
            /* alert("Este campo no puede estar vacío"); */
            errores2.release_date = "Este campo no puede estar vacío"
            release_dateError.innerHTML += errores2.release_date;
            release_dateError.style.display = "block";
        } else {
            errores2.release_date = ""
            release_dateError.innerHTML = errores2.release_date;
            release_dateInput.classList.remove("is-invalid");
            release_dateInput.classList.add("is-valid");
            release_dateInputError.style.display = "none";
            release_dateInputError.innerHTML = "";
            
        }
    });

    lengthInput.addEventListener("blur", () => {      
        if (lengthInput.value < 60 || lengthInput.value > 360) {
            lengthInput.classList.add("is-invalid");
            /* alert("La duración debe ser entre 60 y 360 minutos"); */
            errores2.lengthE = "La duración debe ser entre 60 y 360 minutos"
            lengthError.innerHTML += errores2.lengthE;
            lengthError.style.display = "block";
            
        } else {
            errores2.lengthE = ""
            lengthError.innerHTML = errores2.lengthE;
            lengthInput.classList.remove("is-invalid");
            lengthInput.classList.add("is-valid");
            lengthInputError.style.display = "none";
            lengthInputError.innerHTML = "";
        }         
    });

    genreInput.addEventListener("input", () => {
        if (genreInput.value == "") {
            genreInput.classList.add("is-invalid");
            /* alert("Este campo no puede estar vacío"); */
            errores2.genre = "Este campo no puede estar vacío"
            genreError.innerHTML += errores2.length;
            genreError.style.display = "block";
        } else {
            genreInput.classList.remove("is-invalid");
            genreInput.classList.add("is-valid");
            genreInputError.style.display = "none";
            genreInputError.innerHTML = "";   
        }
    });
}
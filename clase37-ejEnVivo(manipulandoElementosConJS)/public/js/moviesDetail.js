const h1 = document.querySelector('h1');
const section = document.querySelector('section');
const p = document.querySelectorAll('p');


h1.classList.add('titulo');

for (let i=0; i<p.length; i++) {
   p[i].classList.add('fondoTransparente');
}

section.classList.add('fondoCRUD');
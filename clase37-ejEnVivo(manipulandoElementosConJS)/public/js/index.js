const main = document.querySelector('main');
const h2 = document.querySelector('h2');
const a = document.querySelector('a');
const p = document.querySelectorAll('p');

console.log(h2)

const userName = window.prompt("Ingrese su nombre");

if (!userName) {
   h2.innerHTML += "Invitado"
} else {
   h2.innerHTML += userName;
}

h2.style.textTransform = 'uppercase';

a.style.color = "#E51B3E";

const result = window.confirm('¿Desea colocar un fondo depantalla?')

if (result) {
   document.querySelector('body').classList.add('fondo');
}

for (let i=0; i<p.length; i++) {
   if (i%2==0) {
      p[i].classList.add('destacadoPar')
   } else {
      p[i].classList.add('destacadoImpar')
   }
} 
main.style.display = 'block';






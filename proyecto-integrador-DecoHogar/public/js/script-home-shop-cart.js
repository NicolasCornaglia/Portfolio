function productosEnElCarrito() {
   return localStorage.carrito ? JSON.parse(localStorage.carrito).length : 0
}

window.addEventListener("load", function () {
   let botonesShopCart = document.querySelectorAll(".agregar_carrito")
   let cartNumber = document.querySelector(".cart-number")
   cartNumber.innerHTML = productosEnElCarrito();
   
   botonesShopCart.forEach((boton) => {
      boton.addEventListener("click", (e) => {
         
         if (localStorage.carrito) {
            let carrito = JSON.parse(localStorage.carrito)

            let index = carrito.findIndex(
               (prod) => (prod.id == e.target.dataset.id)
               );
            
            if (index !== -1) {
               carrito[index].quantity++
            } else {
               carrito.push({id: e.target.dataset.id, quantity: 1})
            }
            
            localStorage.setItem('carrito', JSON.stringify(carrito))
         } else {
            localStorage.setItem('carrito', JSON.stringify( [{id: e.target.dataset.id, quantity: 1}] ));
         }
         boton.style.backgroundColor = "lightgreen";
         cartNumber.innerHTML = productosEnElCarrito();

      });
   });
});
function dividir(n,m) {
   if (Number(m) === 0) {
      console.log("No se puede dividir por cero");
      return "";
   } else {
      return n/m;
   }  
}

module.exports = dividir;
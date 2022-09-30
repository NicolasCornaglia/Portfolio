var fs = require('fs');
/* var myArray = fs.readFileSync('valores.txt', 'utf8').split('\n'); */

myArray = JSON.parse(fs.readFileSync('valores.txt', 'utf8')); 

console.log(typeof(myArray[0]));

let positivos = [];
let negativos = [];

for (let i=0; i<myArray.length; i++) {
   if (myArray[i]>0) {
      positivos.push(myArray[i]);
   } else {
      negativos.push(myArray[i]);
   }
}


console.log("Inicio"); 


for (let i=0; i<negativos.length; i++) {
   let neg = negativos[i];

   for (let j=0; j<positivos.length; j++) {
      let suma = neg + positivos[j];
      if ( (suma < 0.5) && (suma > -0.5)) {
         console.log(suma +' Netearon los valores '+neg+' y '+positivos[j]);
         positivos.splice(j,1); // elimina 1 elemento desde el indice j 
      } 
   }
}

for (let i=0; i<negativos.length; i++) {
   let neg = negativos[i];
   for (let j=0; j<positivos.length; j++) {
      if (positivos[j+2] != undefined) {
         for (let k=j+1; k<positivos.length; k++) {
            let suma = neg + positivos[j] + positivos[k];
            if ( (suma < 0.5) && (suma > -0.5)) {
               console.log(suma +' Netearon los valores '+neg+', '+positivos[j]+' y '+ positivos[k]);
               positivos.splice(j,1); // elimina 1 elemento desde el indice j
               positivos.splice(k,1); // elimina 1 elemento desde el indice j
            }
         }
      } 
   }
}

for (let i=0; i<negativos.length; i++) {
   let neg = negativos[i];
   for (let j=0; j<positivos.length; j++) {
      if (positivos[j+3] != undefined) {
         for (let k=j+1; k<positivos.length; k++) {
            for (let l=k+1; l<positivos.length; l++) {
               let suma = neg + positivos[j] + positivos[k] + positivos[l];
               
               if ( (suma < 0.5) && (suma > -0.5)) {
                  console.log(suma +' Netearon los valores '+neg+', '+positivos[j]+', '+ positivos[k]+' y '+ positivos[l]);
                  positivos.splice(j,1); // elimina 1 elemento desde el indice j
                  positivos.splice(k,1); // elimina 1 elemento desde el indice k
                  positivos.splice(l,1); // elimina 1 elemento desde el indice l
               }

            }
         }
      } 
   }
}

   for (let i=0; i<negativos.length; i++) {
      let neg = negativos[i];
      for (let j=0; j<positivos.length; j++) {
         if (positivos[j+4] != undefined) {
            for (let k=j+1; k<positivos.length; k++) {
               for (let l=k+1; l<positivos.length; l++) {
                  for (let m=l+1; m<positivos.length; m++) {
                     let suma = neg + positivos[j] + positivos[k] + positivos[l] + positivos[m];
                     
                     if ( (suma < 0.5) && (suma > -0.5)) {
                        console.log(suma +' Netearon los valores '+neg+', '+positivos[j]+', '+ positivos[k]+', '+ positivos[l]+' y '+positivos[m]);
                        positivos.splice(j,1); // elimina 1 elemento desde el indice j
                        positivos.splice(k,1); // elimina 1 elemento desde el indice k
                        positivos.splice(l,1); // elimina 1 elemento desde el indice l
                        positivos.splice(m,1); // elimina 1 elemento desde el indice m
                     }
                  }
               }
            }
         } 
      }
   }

   for (let i=0; i<negativos.length; i++) {
      let neg = negativos[i];
      for (let j=0; j<positivos.length; j++) {
         if (positivos[j+5] != undefined) {
            for (let k=j+1; k<positivos.length; k++) {
               for (let l=k+1; l<positivos.length; l++) {
                  for (let m=l+1; m<positivos.length; m++) {
                     for (let o=m+1; o<positivos.length; o++) {
                        let suma = neg + positivos[j] + positivos[k] + positivos[l] + positivos[m] + positivos[o];
                        
                        if ( (suma < 0.5) && (suma > -0.5)) {
                           console.log(suma +' Netearon los valores '+neg+', '+positivos[j]+', '+ positivos[k]+', '+ positivos[l]+', '+positivos[m]+ ' y ' + positivos[o]);
                           positivos.splice(j,1); // elimina 1 elemento desde el indice j
                           positivos.splice(k,1); // elimina 1 elemento desde el indice k
                           positivos.splice(l,1); // elimina 1 elemento desde el indice l
                           positivos.splice(m,1); // elimina 1 elemento desde el indice m
                           positivos.splice(o,1); // elimina 1 elemento desde el indice o
                        }
                        
                  }
               }
            }
         } 
      }
   }
}

for (let i=0; i<negativos.length; i++) {
   let neg = negativos[i];
   for (let j=0; j<positivos.length; j++) {
      if (positivos[j+6] != undefined) {
         for (let k=j+1; k<positivos.length; k++) {
            for (let l=k+1; l<positivos.length; l++) {
               for (let m=l+1; m<positivos.length; m++) {
                  for (let o=m+1; o<positivos.length; o++) {
                     for (let p=o+1; p<positivos.length; p++) {
                        let suma = neg + positivos[j] + positivos[k] + positivos[l] + positivos[m] + positivos[o] + positivos[p];
                        
                        if ( (suma < 0.5) && (suma > -0.5)) {
                           console.log(suma +' Netearon los valores '+neg+', '+positivos[j]+', '+ positivos[k]+', '+ positivos[l]+', '+positivos[m]+ ' y ' + positivos[o]);
                           positivos.splice(j,1); // elimina 1 elemento desde el indice j
                           positivos.splice(k,1); // elimina 1 elemento desde el indice k
                           positivos.splice(l,1); // elimina 1 elemento desde el indice l
                           positivos.splice(m,1); // elimina 1 elemento desde el indice m
                           positivos.splice(o,1); // elimina 1 elemento desde el indice o
                           positivos.splice(p,1); // elimina 1 elemento desde el indice p
                        }
                  }   
               }
            }
         }
      } 
   }
}
}

console.log("Fin"); 
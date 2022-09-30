import React from 'react';
import Encabezado from './Encabezado'
import Banner from './Banner';
import Producto from './Producto'
import Footer from './Footer'

function Web(){
  return (
    <div className="container">
      
      <header>
        <Encabezado />
        <Banner />
      </header> 
      
      <main> 
        <Producto/>
      </main> 

      <Footer/>

    </div>
  )

}
export default Web;
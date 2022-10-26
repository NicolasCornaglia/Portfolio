import React from 'react';
import PropTypes from 'prop-types';


function ContenedorPublicidad(props) {
   return (
      <div>
         <p>--Inicio del espacio publicitario</p>
            {props.children}
         <p>--Fin del espacio publicitario</p>
     </div>
   )
};


export default ContenedorPublicidad;
import React from 'react';
import PropTypes from 'prop-types';

function ContentRowMovies(props) {
   return (
      <div className="col-md-4 mb-4">
         <div className={`card border-left-${props.color} shadow h-100 py-2`}>
            <div className="card-body">
               <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                     <div className="text-xs font-weight-bold text-{props.color} text-uppercase mb-1">{props.titulo}</div>
                     <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cifra}</div>
                  </div>
                  <div className="col-auto">
                     {props.icon}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

ContentRowMovies.propTypes = {
   titulo: PropTypes.string.isRequired,
   color: PropTypes.string.isRequired,
   cifra: PropTypes.string.isRequired,
   icon: PropTypes.oneOf([<i className="fas fa-film fa-2x text-gray-300"></i>,<i className="fas fa-award fa-2x text-gray-300"></i>,<i className="fas fa-user fa-2x text-gray-300"></i>])
}

ContentRowMovies.defaultProps = {
   titulo: 'Default Title',
   color: 'Default Color',
   cifra: 'Default Number',
   icon: 'Default Icon'
}



export default ContentRowMovies;
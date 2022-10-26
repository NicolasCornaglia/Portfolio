import React from 'react';
import PropTypes from 'prop-types';

function GenresInDb(props) {
   return (
      <div className="col-lg-6 mb-4">
         <div className="card bg-dark text-white shadow">
            <div className="card-body">
               {props.genero}
            </div>
         </div>
      </div>
   )
}

GenresInDb.propTypes = {
   genero: PropTypes.string.isRequired
}

GenresInDb.defaultProps = {
   genero: 'Default genre'
}



export default GenresInDb;
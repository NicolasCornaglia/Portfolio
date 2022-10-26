import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb'

function ContentRowTop(){
	let titulos = ['Movies in Data Base','Total awards','Actors quantity']
	let icons = [<i className="fas fa-film fa-2x text-gray-300"></i>,<i className="fas fa-award fa-2x text-gray-300"></i>,<i className="fas fa-user fa-2x text-gray-300"></i>]
	let colors = ['primary','success','warning']
	let cifras = ['21','79','49']
	let genres = ['Acción','Animación','Aventura','Ciencia Ficción','Comedia','Documental','Drama','Fantasia','Infantiles','Musical']
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<div className="row">
						{/*<!-- Movies in Data Base -->*/}
						{titulos.map((title,i) => (<ContentRowMovies titulo={title} icon={icons[i]} color={colors[i]} cifra={cifras[i]}/>))}
					</div>
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<LastMovieInDb/>

						{/*<!-- Genres in DB -->*/}
						<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
								</div>
								<div className="card-body">
									<div className="row">
										{genres.map(genre => (<GenresInDb genero={genre}/>))}
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;
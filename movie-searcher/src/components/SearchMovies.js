import React from 'react';
import { useState, useEffect } from 'react'


function SearchMovies() {

	const [movies, setMovies] = useState([]);
	const [keyword1, setKeyword1] = useState("ACTION");

	const [keywordTEST, setKeywordTEST] = useState("Busque una pelicula");

	const keyword = "ACTION"

	useEffect(() => {
		fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=90c6585e`)
			.then(response => response.json())
			.then(data => {
				setMovies(data.Search)
			})
			.catch(error => console.error(error));
	}, [])

	useEffect(() => {
		fetch(`http://www.omdbapi.com/?s=${keyword1}&apikey=90c6585e`)
			.then(response => response.json())
			.then(data => {
				setMovies(data.Search)
			})
			.catch(error => console.error(error));
		console.log('%cse actualizo el componente', 'color: green')
	}, [keyword1])

	const searchFunction = (e) => {
		e.preventDefault();
		setKeyword1(keywordTEST);

		console.log("keyword1", keyword1);
	}

	const handleChange = (evento) => {
		setKeywordTEST(evento.target.value);
		console.log(keywordTEST);
	}

	// Credenciales de API
	const apiKey = '90c6585e'; 

	return (
		<div className="container-fluid">
			{
				apiKey !== '' ?
					<>
						<div className="row my-4">
							<div className="col-12 col-md-6">
								{/* Buscador */}
								<form onSubmit={searchFunction}>
									<div className="form-group">
										<label htmlFor="">Buscar por título:</label>
										<input type="text" className="form-control" value={keywordTEST} onChange={handleChange} />
									</div>
									<button className="btn btn-info">Search</button>
								</form >
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<h2>Películas para la palabra: {keyword1}</h2>
							</div>
							{/* Listado de películas */}
							{
								movies.length > 0 && movies.map((movie, i) => {
									return (
										<div className="col-sm-6 col-md-3 my-4" key={i}>
											<div className="card shadow mb-4">
												<div className="card-header py-3">
													<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
												</div>
												<div className="card-body">
													<div className="text-center">
														<img
															className="img-fluid px-3 px-sm-4 mt-3 mb-4"
															src={movie.Poster}
															alt={movie.Title}
															style={{ width: '90%', height: '400px', objectFit: 'cover' }}
														/>
													</div>
													<p>{movie.Year}</p>
												</div>
											</div>
										</div>
									)
								})
							}
						</div>
						{movies.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
					</>
					:
					<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchMovies;

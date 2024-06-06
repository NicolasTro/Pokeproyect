import React, { useRef, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { useState } from "react";

export const Pokedex = () => {
	const canvasRef = useRef(null);
	const [limite, setLimite] = useState(0);
	const [listaPokemons, setListaPokemons] = useState([]);
	const [indice, setIndice] = useState(0);
	
	const [pokemon, setPokemon] = useState({
		identificador: 0,
		name: "",
		endpoint: "",
		imagen: "",
	});

	const url = `https://pokeapi.co/api/v2/pokemon?limit=${limite}&offset=0`;

	/*---------------------------------------------------------------------------
	/* BOTONES AUMENTAR Y DISMINUIR LIMITE CONSULTA*/

	const aumentar = () => {
		setLimite(limite + 1);
	};

	const disminuir = () => {
		if (limite > 0) {
			setLimite(limite - 1);
		}
	};
	/*----------------------------------------------------------------------------
	/*BOTONES SIGUIENTE Y ANTERIOR POKEMON */
	const siguiente = () => {
		if (listaPokemons.length > 0 && limite > 0) {
			if (indice < listaPokemons.length-1) {
				setIndice(indice + 1);
			}
		}
	};
	
	const anterior = () => {
		if (indice > 0) {
			setIndice(indice - 1);
		}
	};
	/*---------------------------------------------------------------------------
	/**/


	useEffect(() => {
		
		if (listaPokemons.length > 0 && listaPokemons[indice].url) {
			axios(pokemon.url).then(res => {
				setPokemon(prevPokemon => ({
					...prevPokemon,
					identificador: id,
					name: listaPokemons[indice].name,
					endpoint: listaPokemons[indice].url,
					imagen: res.data.sprites.front_default,
				}));

				console.log(pokemon.imagen);
			});

			const id = listaPokemons[indice].url.split("/")[6];

			console.log(pokemon);
		}
	}, [pokemon]);


	const buscar = () => {
		if (limite > 0) {
			axios(url).then(res => {
				setListaPokemons(res.data.results);
				
			});
		}
	};
	useEffect(() => {
		setPokemon(listaPokemons[indice]);
		
	}, [indice]);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.shadowBlur = 10;
		ctx.shadowColor = "rgba(0, 0, 0, 0.6)";
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 5;

		ctx.beginPath();
		ctx.moveTo(0, 100);
		ctx.bezierCurveTo(280, 110, 120, 30, 450, 28);
		ctx.lineWidth = 15;
		ctx.strokeStyle = "#500";
		ctx.stroke();
	}, []);

	return (

		/*ESTA ETAPA TENGO QUE MODULARIZARLA COMPLETA AL IGUAL QUE EL CSS*/
		<section className="pokedexBody">
			<div className="cuerpoPokedex">
				<div className="cabecera">
					<div className="luces">
						<div className="grid-item">
							<div className="luzBlancaFondo">
								<div className="luzAzulFrente">
									<div className="luzAzulOscuroFrente">
										<div className="luzAzulClaroFrente">
											<div className="luzBlancaFrente"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="grid-item">
							<div className="tresLuces header">
								<div className="luzRoja">
									<div className="luzRojaOscuraFrente">
										<div className="luzRojaClaraFrente">
											<div className="luzRojaFinal"></div>
										</div>
									</div>
								</div>
								<div className="luzAmarilla">
									<div className="luzAmarillaOscuraFrente">
										<div className="luzAmarillaClaraFrente">
											<div className="luzAmarillaFinal"></div>
										</div>
									</div>
								</div>

								<div className="luzVerde">
									<div className="luzVerdeOscuraFrente">
										<div className="luzVerdeClaraFrente">
											<div className="luzVerdeFinal"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<canvas ref={canvasRef} width={400} height={110} className="canvas"></canvas>

				<div className="pantallaContorno">
					<div className="pantallaExterior">
						<div className="pantalla">
							<Card pokemon={pokemon} />
						</div>
					</div>
				</div>

				<div className="seccionBotonera">
					<div className="panelIzquierdo">
						<div className="botoneraSuperior">
							<div className="fondoBotonNegro">
								<button className="botonNegro" onClick={buscar}></button>
							</div>
							<div className="botonesHorizontales">
								<button className="botonRojo" onClick={disminuir}></button>
								<button className="botonAzul" onClick={aumentar}></button>
							</div>
						</div>
						<div className="pantallita">
							&nbsp; Cant limite <br></br>&nbsp; &nbsp;de pokemons: {limite}
						</div>
					</div>

					<div className="panelDerecho">
						<div className="cruz">
							<div className="cruzArriba">
								<button className="botonArriba" onClick={anterior}></button>
							</div>
							<div className="cruzMedio">
								<button className="botonIzquierda"></button>
								<button className="botonCentro"></button>
								<button className="botonDerecha"></button>
							</div>

							<div className="cruzAbajo">
								<button className="botonAbajo" onClick={siguiente}></button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="visagra">
				<div className="reflejoVisagra"></div>
				<div className="circuloTop1"></div>
				<div className="circuloTop11"></div>
				<div className="circuloTop2"></div>
				<div className="circuloTop22"></div>
				<div className="circuloTop222"></div>
				<div className="circuloTop3"></div>
				<div className="circuloTop33"></div>
				<div className="circuloTop333"></div>
				<div className="circuloBottom"></div>
			</div>
		</section>
	);
};

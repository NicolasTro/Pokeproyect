import React, { useRef, useEffect } from "react";
import axios from "axios";

import { useState } from "react";

import { Visagra } from "./Visagra";
import { Botonera } from "./Botonera";
import { Pantalla } from "./Pantalla";
import { Luz } from "./Luz";
import { LuzPrincipal } from "./LuzPrincipal";

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
			if (indice < listaPokemons.length - 1) {
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
	/*BOTON BUSCAR*/
	const buscar = () => {
		if (limite > 0) {
			axios(url).then(res => {
				setListaPokemons(res.data.results);
			});
		}
	};

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
							<LuzPrincipal/>
						</div>
						<div className="grid-item">
							<div className="tresLuces header">
								<Luz colorLuz={"luzRoja"} luzOscura={"luzRojaOscuraFrente"} luzClara={"luzRojaClaraFrente"} luzFinal={"luzRojaFinal"} />
								<Luz colorLuz={"luzAmarilla"} luzOscura={"luzAmarillaOscuraFrente"} luzClara={"luzAmarillaClaraFrente"} luzFinal={"luzAmarillaFinal"} />
								<Luz colorLuz={"luzVerde"} luzOscura={"luzVerdeOscuraFrente"} luzClara={"luzVerdeClaraFrente"} luzFinal={"luzVerdeFinal"} />
							</div>
						</div>
					</div>
				</div>
				<canvas ref={canvasRef} width={400} height={110} className="canvas"></canvas>
				<Pantalla pokemon={pokemon} />
				<Botonera disminuir={disminuir} aumentar={aumentar} anterior={anterior} siguiente={siguiente} limite={limite} buscar={buscar} />
			</div>
			<Visagra />
		</section>
	);
};

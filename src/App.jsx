import { useState, useEffect, useRef } from "react";
import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/NavBar";
import StyleHeader from "./Styles/Header.module.css";
import StyleMain from "./Styles/Main.module.css";
import LogoHeader from "./assets/images/Pokemon-Logo.png";
import { Pokedex } from "./Components/Pokedex";

function App() {
	const audioRef = useRef(null);

	const playSound = () => {
		audioRef.current.play();
	};

	return (
		<div className="fondo">
			<div className="pokedex">
				<button onClick={playSound}>Musiquita</button>
				<audio ref={audioRef} src="../public/sounds/intro.mp3" />
				<Pokedex />
			</div>
		</div>
	);
}

export default App;


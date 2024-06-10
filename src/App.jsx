import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./Components/NavBar";
import { routes } from "./utils/routes";

import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Pdex } from "./Pages/Pdex";

function App() {
	const audioRef = useRef(null);
	const [isAudioAllowed, setIsAudioAllowed] = useState(false);

	const playSound = () => {
		if (audioRef.current) {
			audioRef.current.play();
			audioRef.current.play().catch(error => {
				console.error("Failed to play audio:", error);
			});
		}
	};

	useEffect(() => {
		if (isAudioAllowed) {
			playSound();
		}
	}, [isAudioAllowed]);

	const handleUserInteraction = () => {
		setIsAudioAllowed(true);
	};

	return (
		<div className="fondo" onClick={handleUserInteraction}>
			<audio ref={audioRef} src="../src/assets/sounds/IntroSerie.m4a" />
			<Navbar />
			<Routes>
				<Route path={routes.home} element={<Home />} />
				<Route path={routes.pokedex} element={<Pdex />} />
				<Route path="*" element={<h1>Error 404 - Page not found</h1>} />
			</Routes>
		</div>
	);
}

export default App;


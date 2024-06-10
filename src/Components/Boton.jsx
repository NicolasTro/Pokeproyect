import React from "react";

export const Boton = ({ colorBoton, funcion }) => {
	return <button className={colorBoton} onClick={funcion}></button>;
};

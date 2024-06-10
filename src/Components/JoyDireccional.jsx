import React from "react";

export const JoyDireccional = ({anterior, siguiente}) => {
    
	return (
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
	);
};

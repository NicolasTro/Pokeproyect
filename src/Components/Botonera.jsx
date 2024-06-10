import { Boton } from "./Boton";
import { JoyDireccional } from "./JoyDireccional";


export const Botonera = ({disminuir, aumentar, anterior, siguiente, limite, buscar}) => {
	return (
		<div className="seccionBotonera">
			<div className="panelIzquierdo">
				<div className="botoneraSuperior">
					<div className="fondoBotonNegro">
						<Boton colorBoton={"botonNegro"} funcion={buscar}/>						
					</div>
					<div className="botonesHorizontales">
						<Boton colorBoton={"botonRojo"} funcion={disminuir} />
						<Boton colorBoton={"botonAzul"} funcion={aumentar} />
					</div>
				</div>
				<div className="pantallita">
					&nbsp; Cant limite <br></br>&nbsp; &nbsp;de pokemons: {limite}
				</div>
			</div>
			<div className="panelDerecho">
				<JoyDireccional anterior={anterior} siguiente={siguiente} />
			</div>
		</div>
	);
};

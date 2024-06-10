import Card from "./Card";


export const Pantalla = ({pokemon}) => {
	return (
		<div className="pantallaContorno">
			<div className="pantallaExterior">
				<div className="pantalla">
					<Card pokemon={pokemon} />
				</div>
			</div>
		</div>
	);
};

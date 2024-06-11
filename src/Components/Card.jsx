
const Card = ({pokemon}) => {	

	return (
		<>
			{pokemon.name==="" ? (
        <div className="fondoPantalla"></div>
      ) : (
        <>
          <div className="card">

          <h3>{pokemon.name.toUpperCase()}</h3> 
          { (<div className="pokeImagen">
            <img style={{  height: "120px" }}
                 src={pokemon.imagen}                
                 />
            </div>
          )}
        </div>
        </>
      )}
		</>
	);
};

export default Card;

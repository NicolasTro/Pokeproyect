import React, { useEffect, useState } from "react";


const Card = ({pokemon}) => {	
	
	



	return (
		<>
			{!pokemon ? (
        <div>No hay Pokémon para mostrar.</div>
      ) : (
        <>
          <h1>{pokemon.name.toUpperCase()}</h1> 
          { (<div><img style={{ width: "150px", height: "150px" }}
                 src={pokemon.imagen}
                
              />
            </div>
          )}
        </>
      )}
		</>
	);
};

export default Card;

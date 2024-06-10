import StyleNavBar from "../Styles/Header.module.css"
import {Link} from "react-router-dom"
import { routes } from "../utils/routes";
export const Navbar = () => {
	return (
		<nav className={`"navbar navbar-expand-lg navbar-light bg-light" ${StyleNavBar.a}`} >
		<a className="navbar-brand" href="#">POKEMON</a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span className="navbar-toggler-icon"></span>
		</button>
	  
		<div className="collapse navbar-collapse" id="navbarSupportedContent">
		<button onClick={() => navigate(-1)}>🔙</button>
		  {/* <ul className="navbar-nav mr-auto"> */}
			{/* <li className="nav-item active"> */}
			  <Link to={routes.home}>Inicio</Link>
			{/* </li> */}
			{/* <li className="nav-item active"> */}
			  <Link to={routes.pokedex}>Iniciar Pokedex</Link>
			  
			{/* </li>			 */}
		  {/* </ul>		   */}
		</div>
	  </nav>
	)
};

export default Navbar

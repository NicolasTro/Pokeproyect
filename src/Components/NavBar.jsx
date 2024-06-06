import StyleNavBar from "../Styles/Header.module.css"

export const Navbar = ({ funcion }) => {
	return (
		<nav className={`navbar navbar-expand-lg navbar-light bg-light" ${StyleNavBar.header} ${StyleNavBar.a}`}>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className={`"navbar-nav mr-auto" ${StyleNavBar.a}`}>
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Inicio <span className="sr-only">(current)</span>
						</a>
					</li>

					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
							Dropdown
						</a>
						<div className="dropdown-menu">
							<a className="dropdown-item" href="#">
								Action
							</a>
							<a className="dropdown-item" href="#">
								Another action
							</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="#">
								Something else here
							</a>
						</div>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Search pokemon" aria-label="Search"></input>
					<button className="btn btn-outline-success my-2 my-sm-0" onClick={funcion}>
						Search
					</button>
				</form>
			</div>
		</nav>
	)
};

export default Navbar;

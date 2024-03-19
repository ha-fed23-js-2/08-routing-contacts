import { Link, Outlet } from "react-router-dom"

// Router motsvarar App-komponenten
// Består av en statisk del (visas alltid) och en dynamisk (Outlet ersätts av andra komponenter)
const Root = () => (
	<div className="app">
		<header>
			<h1> Mina vänner </h1>
			<nav>
				<Link to="/"> Start </Link>
				<Link to="/friends"> Vänlista </Link>
				<Link to="/add"> Ny vän </Link>
			</nav>
		</header>

		<main>
			<Outlet />
		</main>
	</div>
)

export default Root

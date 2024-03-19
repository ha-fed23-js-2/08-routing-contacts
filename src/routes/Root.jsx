import { Outlet } from "react-router-dom"

// Router motsvarar App-komponenten
// Består av en statisk del (visas alltid) och en dynamisk (Outlet ersätts av andra komponenter)
const Root = () => (
	<div className="app">
		<header>
			<h1> Mina vänner </h1>
			<nav>
				<a href="#"> Vänlista </a>
				<a href="#"> Ny vän </a>
				<a href="#"> (Uppdatera info) </a>
			</nav>
		</header>

		<main>
			<Outlet />

			
			
			<hr />

			<section className="form">
				<div> <input type="text" value="Bosse Bengtsson" /> </div>
				<div> <input type="text" value="bosse@mail.com" /> </div>
				<button> Spara </button>

			</section>
		</main>
	</div>
)

export default Root

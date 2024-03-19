

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

			<div>
				<input type="text" placeholder="Sök namn" />
			</div>

			<section className="friends">
				<div className="friend">
					<div> Bosse Bengtsson </div>
					<div> bosse@mail.com </div>
					<button> Ändra </button> <button> Ta bort </button>
				</div>


				<div className="friend">
					<div> Bosse Bengtsson </div>
					<div> bosse@mail.com </div>
					<button> Ändra </button> <button> Ta bort </button>
				</div>

				<div className="friend">
					<div> Bosse Bengtsson </div>
					<div> bosse@mail.com </div>
					<button> Ändra </button> <button> Ta bort </button>
				</div>
			</section>

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

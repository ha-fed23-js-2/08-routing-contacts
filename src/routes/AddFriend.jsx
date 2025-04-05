import { useFriendStore } from "../data/store.js"
import { useState } from 'react'

const AddFriend = () => {
	// ** state-variabler, lokala och hämtade från store ** //
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	const newFriend = useFriendStore(state => state.newFriend)
	// Alternativ:
	// const { friends, newFriend } = useFriendStore(state => ({
	// 	friends: state.friends,  // Användes för felsökning
	// 	newFriend: state.newFriend
	// }))


	// ** Event-funktioner ** //
	// Så att state-variablerna uppdateras när man skriver
	const handleNameChange = event => {
		setName(event.target.value)
	}
	const handleEmailChange = event => {
		setEmail(event.target.value)
	}

	const doSaveFriend = () => {
		newFriend(name, email)
		setName('')
		setEmail('')
	}


	// ** Variabler och konstanter som stöd för JSX ** //
	// Räknas ut baserat på state-variablerna varje gång komponenten renderas
	const canSaveFriend = name !== '' && email !== ''


	return (
		<section className="form">
			<div>
				<label> Namn </label>
				<input type="text"
					onChange={handleNameChange}
					value={name}
					/>
			</div>
			<div>
				<label> E-post </label>
				<input type="text"
					onChange={handleEmailChange}
					value={email}
					/>
			</div>
			<button
				onClick={doSaveFriend}
				disabled={!canSaveFriend}
				> Spara </button>

			{!canSaveFriend && <p className="error"> Fyll i båda fälten för att lägga till din vän. </p>}
		</section>
	)
}

export default AddFriend

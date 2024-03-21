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

	const doSaveFriend = () => newFriend(name, email)


	// ** Variabler och konstanter som stöd för JSX ** //
	// Räknas ut baserat på state-variablerna varje gång komponenten renderas
	const canSaveFriend = name !== '' && email !== ''


	return (
		<section className="form">
			<div>
				<label> Namn </label>
				<input type="text"
					onChange={handleNameChange}
					/>
			</div>
			<div>
				<label> E-post </label>
				<input type="text"
					onChange={handleEmailChange}
					/>
			</div>
			<button
				onClick={doSaveFriend}
				disabled={!canSaveFriend}
				> Spara </button>
		</section>
	)
}

export default AddFriend

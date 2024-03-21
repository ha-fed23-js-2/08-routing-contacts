import { useFriendStore } from "../data/store.js"
import { useState } from 'react'

const AddFriend = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	const { friends, newFriend } = useFriendStore(state => ({
		friends: state.friends,  // TODO: ta bort när vi är klara
		newFriend: state.newFriend
	}))
	// Alternativ:
	// const friends = useFriendStore(state => state.friends)
	// const newFriend = useFriendStore(state => state.newFriend)

	console.log('AddFriend friends = ', friends)
	// console.log('AddFriend name, email: ', name, email);

	// Så att state-variablerna uppdateras när man skriver
	const handleNameChange = event => {
		setName(event.target.value)
	}
	const handleEmailChange = event => {
		setEmail(event.target.value)
	}

	const doSaveFriend = () => newFriend(name, email)

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

import { useState } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import { useFriendStore } from "../data/store";

const EditFriend = () => {
	const { id } = useParams()  // OBS id är en string
	const navigate = useNavigate()
	const { friends, editFriend } = useFriendStore(state => ({
		friends: state.friends,
		editFriend: state.editFriend
	}))

	// console.log('EditFriend: valde vän med id=', id, typeof id);

	const friend = friends.find(f => f.id === Number(id))
	const [name, setName] = useState(friend?.name)
	const [email, setEmail] = useState(friend?.email)

	if( !friend ) {
		// console.log('EditFriend: friend not found, friends=', friends);
		return (
			<section>
				<p> Kunde inte hitta vännen!
					<Link to="/friends"> Gå till vänlistan </Link>
					och försök igen. </p>
			</section>
		)
	}

	const handleSave = () => {
		// spara ändringarna till store
		editFriend(Number(id), name, email)
		// navigera användaren till vänlistan
		navigate('/friends')
	}

	return (
		<section className="form">
			<div>
				<input type="text"
					value={name}
					onChange={event => setName(event.target.value)}
					/>
			</div>
			<div>
				<input type="text"
					value={email}
					onChange={event => setEmail(event.target.value)}
					/>
			</div>
			<button onClick={handleSave}> Spara </button>

		</section>
	)
}

export default EditFriend

import { Link } from "react-router-dom"
import { useFriendStore } from "../data/store.js"
import { useState } from "react"


const FriendList = () => {
	const { friends, removeFriend } = useFriendStore(state => ({
		friends: state.friends,
		removeFriend: state.removeFriend
	}))
	const [search, setSearch] = useState('')

	let filtered = friends
	if( search !== '' ) {
		filtered = friends.filter(f => match(search, f.name) || match(search, f.email))
	}
	function match(needle, haystack) {
		needle = needle.toLowerCase()
		haystack = haystack.toLowerCase()
		return haystack.includes(needle)
	}

	return (
		<>
		<div>
			<input type="text" placeholder="Sök namn"
				onChange={e => setSearch(e.target.value)}
				/>
		</div>
		<section className="friends">
			{filtered.map(friend => (
				<div key={friend.id} className="friend">
					<div> {friend.name} </div>
					<div> {friend.email} </div>
					<Link to={'/edit/' + friend.id} role="button"> Ändra </Link>
					<button onClick={() => removeFriend(friend.id)}> Ta bort </button>
				</div>
			))}
		</section>
		</>
	)
}

export default FriendList

import { Link } from "react-router-dom"
import { useFriendStore } from "../data/store.js"


const FriendList = () => {
	const { friends, removeFriend } = useFriendStore(state => ({
		friends: state.friends,
		removeFriend: state.removeFriend
	}))

	return (
		<>
		<div>
			<input type="text" placeholder="Sök namn" />
		</div>
		<section className="friends">
			{friends.map(friend => (
				<div key={friend.id} className="friend">
					<div> {friend.name} </div>
					<div> {friend.email} </div>
					<Link to={'/friends/' + friend.id}> Ändra </Link>
					<button onClick={() => removeFriend(friend.id)}> Ta bort </button>
				</div>
			))}
		</section>
		</>
	)
}

export default FriendList

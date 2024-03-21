import { useFriendStore } from "../data/store.js"

const AddFriend = () => {
	const { friends, newFriend } = useFriendStore(state => ({
		friends: state.friends,
		newFriend: state.newFriend
	}))
	// Alternativ:
	// const friends = useFriendStore(state => state.friends)
	// const newFriend = useFriendStore(state => state.newFriend)

	console.log('AddFriend friends = ', friends)

	return (
		<section className="form">
			<div> <input type="text" defaultValue="Bosse Bengtsson" /> </div>
			<div> <input type="text" defaultValue="bosse@mail.com" /> </div>
			<button> Spara </button>
		</section>
	)
}

export default AddFriend

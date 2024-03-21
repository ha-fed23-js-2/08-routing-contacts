import { create } from 'zustand'
import testFriends from './testFriends.js'

const useFriendStore = create(set => ({
	friends: testFriends,

	// newFriend('Bosse', 'bo@mail.com')
	newFriend: (name, email) => set(state => ({
		friends: [
			...state.friends,
			{
				id: generateId(state.friends),
				name: name,
				email: email
			}
		]  // state.friends
	})),  // newFriend

	removeFriend: (id) => set(state => ({
		friends: state.friends.filter(friend => friend.id !== id)
	}))
}))

function generateId(friends) {
	// console.log('generateId friends:', friends);
	let highest = 1
	for( let i=0; i<friends.length; i++ ) {
		// console.log('generateId inuti loopen', friends[i], highest);
		if( friends[i].id > highest ) {
			// console.log('generateId villkor', friends[i], highest);
			highest = friends[i].id
		}
	}
	return highest + 1
}

export { useFriendStore }

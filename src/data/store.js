import { create } from 'zustand'
import testFriends from './testFriends.js'

const useFriendStore = create(set => ({
	friends: testFriends,

	// newFriend('Bosse', 'bo@mail.com')
	newFriend: (name, email) => set(state => ({
		friends: [
			...state.friends,
			{
				// TODO: lägg till ett id
				name: name,
				email: email
			}
		]  // state.friends
	}))  // newFriend
}))

export { useFriendStore }

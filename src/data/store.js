import { create } from 'zustand'

const useFriendStore = create(set => ({
	friends: [],

	// newFriend('Bosse', 'bo@mail.com')
	newFriend: (name, email) => set(state => ({
		friends: [
			...state.friends,
			{
				name: name,
				email: email
			}
		]  // state.friends
	}))  // newFriend
}))

export { useFriendStore }

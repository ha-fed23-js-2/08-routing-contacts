import { createHashRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Landing from './Landing.jsx';
import FriendList from './FriendList.jsx';
import AddFriend from './AddFriend.jsx';
import EditFriend from './EditFriend.jsx';

const router = createHashRouter([
	{
		// Om URL i adressfältet matchar denna route '/'
		path: "/",

		// Så ska Root-komponenten renderas
		element: <Root />,

		// Lägg till ett element om du vill hantera felaktiga länkar
		// errorElement: <ErrorPage />,

		// Inuti Root ska vi klistra in den komponent vars route matchar URL bäst
		children: [
			{
				path: '/friends',
				element: <FriendList />
			},
			{
				path: '/edit/:id',
				element: <EditFriend />
			},
			{
				path: '/add',
				element: <AddFriend />
			},
			{
				path: '/',
				element: <Landing />
			},
		]
	},

]);

export { router }

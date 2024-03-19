import { createHashRouter } from 'react-router-dom'
import Root from './Root.jsx'

const router = createHashRouter([
	{
		// Om URL i adressfältet matchar denna route '/'
		path: "/",

		// Så ska Root-komponenten renderas
		element: <Root />,

		// Inuti Root ska vi klistra in den komponent vars route matchar URL bäst
		// TODO
	},
	
]);

export { router }

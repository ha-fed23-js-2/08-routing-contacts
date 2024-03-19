import { createHashRouter } from 'react-router-dom'
import Root from './Root.jsx'

const router = createHashRouter([
	{ path: "/", element: <Root /> },
	{ path: "/friends", element: <Root /> },  // TODO: byt komponent
	{ path: "/add", element: <Root /> },    // TODO: byt komponent
]);

export { router }

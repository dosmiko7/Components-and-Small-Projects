import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import BitcoinPage from "./pages/BitcoinPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "/converting", element: <BitcoinPage /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;

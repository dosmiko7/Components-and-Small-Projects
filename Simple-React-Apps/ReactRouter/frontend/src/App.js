import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventsRootLayout from "./pages/EventsRoot";
import ErrorPage from "./pages/Error";

// 1. "loader" in object with <EventsPage> allows us to to do sth before rendering a component. We're give a function which tells what we want to do/ In this example, we move fetch data from Events.js and paste it here.
// loader's return will be available in <EventsPage> component
// 2. In EventsPage.js
const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		// 8.5 Error element will be shown to the screen whenever an error is generated in any route related code (including loader)
		// 8.7 We can also add different errorElement to other nested routes
		// 9. If we want to recognize type of error and display it on the screen, we need change our loader (next part in EventsPage.js)
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: "events",
				element: <EventsRootLayout />,
				children: [
					{
						index: true,
						element: <EventsPage />,
						// // 4.5 This code is moved to EventsPage.js
						// loader: async () => {
						// 	const response = await fetch("http://localhost:8080/events");
						// 	if (!response.ok) {
						// 		// ...
						// 	} else {
						// 		const resData = await response.json();
						// 		return resData.events;
						// 	}
						// },
						loader: eventsLoader,
					},
					{ path: ":eventId", element: <EventDetailPage /> },
					{ path: "new", element: <NewEventPage /> },
					{ path: ":eventId/edit", element: <EditEventPage /> },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;

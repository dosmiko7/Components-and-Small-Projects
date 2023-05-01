import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EventDetailPage, { loader as eventDetailLoader } from "./pages/EventDetailPage";
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
					// 14. Adding new route definition to fetch data to EventDetailPage and also to EditEventPage. We need move eventId path here and :eventId/edit. We dont have any element property here beacuase we dont want to add any shared layout. Instead we need loader property which will be shared loader for every child in children property. So loader: eventDetailLoader will execute every time whenever we enter any route from children []
					// 14.5 Now we can use useLoaderData in EditEventPage.js
					{
						path: ":eventId",
						// 14.8 We need to add special index (with some name), to use that loader.
						// 14.9 In EventDetailPage.js
						id: "event-detail",
						// WITH 14:
						loader: eventDetailLoader,
						children: [
							{ index: true, element: <EventDetailPage /> /* BEFORE 14: loader: eventDetailLoader */ },
							{ path: "edit", element: <EditEventPage /> },
						],
					},

					// 12.4 So we need to add loader (before that import loader from EventDetailPage.js)
					// 12.6 Then we need back to our EventDetailPage.js and import useLoaderData hook
					// // BEFORE 14.
					// { path: ":eventId", element: <EventDetailPage />, loader: eventDetailLoader },
					{ path: "new", element: <NewEventPage /> },
					// // BEFORE 14.
					// { path: ":eventId/edit", element: <EditEventPage /> },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;

// 2. We are importing useLoaderData to get closest loaded data.
import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
	// 2.5 events will be the data returned by the loader in route in App.js
	// In fact that we are using asyn in loader, the returned value will be a promise but React Router will automaticlly check that promise and return data for us
	// 3. We could also get data in deeper components as like EventsList. But we can not do that in parent components (for example in App.js)
	const events = useLoaderData();

	return <EventsList events={events} />;
}

export default EventsPage;

// 4. function for loader should be placed in the component where returned data will be used.
// So, we are moving function from App.js here:

export const loader = async () => {
	const response = await fetch("http://localhost:8080/events");
	if (!response.ok) {
		// ...
	} else {
		const resData = await response.json();
		return resData.events;
	}
};

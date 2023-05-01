// 2. We are importing useLoaderData to get closest loaded data.
import { json, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
	// 2.5 events will be the data returned by the loader in route in App.js
	// In fact that we are using asyn in loader, the returned value will be a promise but React Router will automaticlly check that promise and return data for us
	// 3. We could also get data in deeper components as like EventsList. But we can not do that in parent components (for example in App.js)
	// 6.5 We should make sure that we extract necessary data from response
	const data = useLoaderData();

	// 7.5 Error handling (first approach)
	if (data.isError) {
		return <p>{data.message}</p>;
	}

	const events = data.events;

	return <EventsList events={events} />;
}

export default EventsPage;

// 4. function for loader should be placed in the component where returned data will be used.
// So, we are moving function from App.js here:
// 5. Next step in Root.js

// 6. We can return any data by loader. For example: Response which is a browser feature. Thanks to react router we can automatically get data from that response
export const loader = async () => {
	const response = await fetch("http://localhost:8080/events");

	if (!response.ok) {
		// // 7.  Error handling (first approach)
		// return { isError: true, message: "Could not fetch the data" };
		// 8. Error handling (second approach)
		// throw new Error();
		// 8.5 in App.js
		// throw { message: "Could not fetch events." };
		// 9. Displaying kind of problem
		// 9.5 in Error.js
		// throw new Response(JSON.stringify({ message: "Could not fetch events" }), { status: 500 });
		// 10. React Router gives us tool to do it more efficient. json() is a function that creates a response object that includes data in the json format.
		// 11. After that we can change code in Error.js
		return json({ message: "Could not fetch events." }, { status: 500 });
	} else {
		return response;
	}
};

import { json, useLoaderData } from "react-router-dom";
// import { useParams } from "react-router-dom";

import EventItem from "../components/EventItem";

const EventDetailPage = () => {
	// // Get params from the dynamic URL. In our example it will be eventId
	// const params = useParams();

	// 12. We want display some data for certain EventItem from our EventsList.js
	// Instead using useParams() and useEffect(), we'll add loader

	// 12.6 Use useLoaderData hook to get access to data
	const data = useLoaderData();

	return <EventItem event={data.event} />;
};

export default EventDetailPage;

// 12.2 You can still get access to parameters what you need because React Router which calls this loader function, actually passes an object. That object contains two important pieces of data: request - contains a request object and params property; params - contains an object with all your route parameters
// 12.4 After write a loader we need register it in out route definitions in App.js!!!
export const loader = async ({ request, params }) => {
	const id = params.eventId;
	const response = await fetch("http://localhost:8080/events/" + id);

	if (!response.ok) {
		throw json({ message: "Could not fetch details for selected event." }, { status: 500 });
	} else {
		return response;
	}
};

import { useRouteLoaderData } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEventPage = () => {
	// 14. We want to display here EventForm.js
	// We want also fetch here the same data as in EventDetailPage.js. To do that we need add new route definition in our App.js
	// 14.5 Adding useLoaderData hook
	// // BEFORE 14.9:
	// const data = useLoaderData();
	// const event = data.event;

	// // AFTER 14.9:
	const data = useRouteLoaderData("event-detail");
	const event = data.event;
	// 15. In NewEventPage.js

	// 14.6 Sending data to EventForm
	return <EventForm event={event} />;
};

export default EditEventPage;

import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

const NewEventPage = () => {
	// 15. Handling adding events to our backend
	// There are couple approches to do that. First is: adding some kind of submitHandler and sending data via useNavigate() hook.
	// Second one (and better); with action() functions - 15.1 in App.js
	return <EventForm />;
};

export default NewEventPage;

// 15.2 Function for action property in App.js
// Just like with the loader this code is executed in the browser, this is not backend. We can use here any browser API (like localStorage for example)
// 15.5 Now we need use thtat that's passed to this action function from Form
export const action = async ({ request, params }) => {
	// We dont bothering about params, becasue we dont have any params during creating new Event
	// But we are intered in request, becuase that contains whole data from Form
	// 15.5.1 We have to call the special formData() function. That will give us a data object
	const data = await request.formData();
	// 15.5.2 We can call the get method to get access to the different input field values that were submitted
	const eventData = {
		title: data.get("title"),
		image: data.get("image"),
		date: data.get("date"),
		decsription: data.get("description"),
	};
	const respone = await fetch("http://localhost:8080/events", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		// Adding some data to the request.
		// In our case that data that was submitted with the form, but to do that, we need some changes in our EventForm.js component (step 15.3)
		// 15.5.3 We can already convert our data which will be sent to the backend
		body: JSON.stringify(eventData),
	});

	if (!respone.ok) {
		throw json({ message: "Could not save event." }, { status: 500 });
	}
	// 16. With that acrion defined, we can go back to App.js and add it to the route definition
	// 17. After submiting, user should be sent to other page.
	// Redirect creates a respone object. We should pass the path to which you wanna redirect user
	return redirect("/events");
};

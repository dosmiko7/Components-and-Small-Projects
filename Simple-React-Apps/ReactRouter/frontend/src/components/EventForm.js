import { useNavigate, Form, useNavigation, useActionData, json, redirect } from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
	// 19.1 useActionData() gives us access to the data returned by our action function
	// 19.2 Now we need edit Form in return Object.values(...) -> saves values of object (without keys) in iterable object
	// 20. In NewEventPage.js
	const data = useActionData();
	// 18.4 Updating UI State based on the submission status.
	const navigate = useNavigate();
	// Gives us access to navigation object
	const navigation = useNavigation();

	// Now when we are in submitting process, we can for example disable button (look at button in this component)
	// 19. In NewEventPage.js
	const isSubmitting = navigation.state === "submitting";

	function cancelHandler() {
		navigate("..");
	}

	// 14.6 Now we can use event value on inputs with default value attribute provided by React: defaultValue={}
	// 14.7 Now we will get an error because by default when we use loader data, it searches for the closest available loader data and the highest level at which it looks for data is the route definition of the route for which this component was loaded.
	// So in our case (look at App) the highest route is this with EditEventPage element, because there we are using our EventForm component.
	// 14.8 To change that we need add special index to our parent route (look at App.js)
	// 15.3 Make sure that all your inputs have the name attribute beacuse those names will later be used for extracting the data. Next we should replace the form element for Form component
	// 15.4 Add also 'method' property to the Form (whioch supports all HTTP request's methods). What is important this request will not be sent tot he backend automatically, nut instead to our action
	// 15.5 Now we can edit our action in NewEventPage.js (step 15.5)
	return (
		<Form
			method={method}
			className={classes.form}
		>
			{data && data.errors && (
				<ul>
					{Object.values(data.errors).map((err) => (
						<li key={err}>{err}</li>
					))}
				</ul>
			)}
			<p>
				<label htmlFor="title">Title</label>
				<input
					id="title"
					type="text"
					name="title"
					required
					defaultValue={event ? event.title : ""}
				/>
			</p>
			<p>
				<label htmlFor="image">Image</label>
				<input
					id="image"
					type="url"
					name="image"
					required
					defaultValue={event ? event.image : ""}
				/>
			</p>
			<p>
				<label htmlFor="date">Date</label>
				<input
					id="date"
					type="date"
					name="date"
					required
					defaultValue={event ? event.date : ""}
				/>
			</p>
			<p>
				<label htmlFor="description">Description</label>
				<textarea
					id="description"
					name="description"
					rows="5"
					required
					defaultValue={event ? event.decsription : ""}
				/>
			</p>
			<div className={classes.actions}>
				<button
					type="button"
					onClick={cancelHandler}
					disabled={isSubmitting}
				>
					Cancel
				</button>
				<button disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Save"}</button>
			</div>
		</Form>
	);
}

export default EventForm;

// 20.1 We want to edit and add events via form. We need to change method in the Form from method="post" to method={method}. We need also update NewEventPage.js with <EventForm method="post" /> and in the EditEventPagee for <EventForm method="patch"
// 20.2 Now we can extract the method in our action function and change url
// 20.3 Update App.js: delete action's import from NewEventPage and add import action from EventForm.
export const action = async ({ request, params }) => {
	// Here we get method
	const method = request.method;
	const data = await request.formData();

	const eventData = {
		title: data.get("title"),
		image: data.get("image"),
		date: data.get("date"),
		decsription: data.get("description"),
	};
	// We also need to change url
	// First for adding new event, second one for edit existing one
	let url = "http://localhost:8080/events";
	if (method === "PATCH") {
		const eventId = params.eventId;
		url = "http://localhost:8080/events/" + eventId;
	}

	const response = await fetch(url, {
		// Here we are setting the method
		method: method,
		headers: {
			"Content-Type": "application/json",
		},

		body: JSON.stringify(eventData),
	});

	if (response.status === 422) {
		return response;
	}

	if (!response.ok) {
		throw json({ message: "Could not save event." }, { status: 500 });
	}

	return redirect("/events");
};

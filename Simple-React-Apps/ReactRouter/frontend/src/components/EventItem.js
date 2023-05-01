import classes from "./EventItem.module.css";

import { Link, useSubmit } from "react-router-dom";

function EventItem({ event }) {
	// 18.3
	const submit = useSubmit();

	// 18. First, we're adding possibility to confirm of choice for the user, by "window"
	function startDeleteHandler() {
		const proceed = window.confirm("Are you sure?");
		// 18.1 We need add action to our detail route (App.js)
		if (proceed) {
			// 18.3.1 First argument is a data what we wanna submit
			// Second argument is an object with properties which could we also add to Form
			// method will be used in action function
			// 18.4 In EventForm.js
			submit(null, { method: "delete" });
		} else {
		}
	}

	// 13. our "edit" link should take us to EditEventPage.js, so we need to change a element to Link.
	// Link to="edit" -> we add "edit" to our URL, then our route "sees" that and moves user to other url eventId/edit.
	// 14. Lets move to EditEventPage.js
	return (
		<article className={classes.event}>
			<img
				src={event.image}
				alt={event.title}
			/>
			<h1>{event.title}</h1>
			<time>{event.date}</time>
			<p>{event.description}</p>
			<menu className={classes.actions}>
				<Link to="edit">Edit</Link>
				<button onClick={startDeleteHandler}>Delete</button>
			</menu>
		</article>
	);
}

export default EventItem;

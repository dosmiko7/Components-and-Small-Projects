import classes from "./EventItem.module.css";

import { Link } from "react-router-dom";

function EventItem({ event }) {
	function startDeleteHandler() {
		// ...
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

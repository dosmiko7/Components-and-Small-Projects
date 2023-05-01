import { Link } from "react-router-dom";
import classes from "./EventsList.module.css";

function EventsList({ events }) {
	// 11. If we got an item of a list, we want get a data from that item's event. In our case to EventDetailPage.js So first of all, we need to change <a href="..."> into <Link>
	// 12. In EventDetailPage.js
	return (
		<div className={classes.events}>
			<h1>All Events</h1>
			<ul className={classes.list}>
				{events.map((event) => (
					<li
						key={event.id}
						className={classes.item}
					>
						<Link to={event.id}>
							<img
								src={event.image}
								alt={event.title}
							/>
							<div className={classes.content}>
								<h2>{event.title}</h2>
								<time>{event.date}</time>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default EventsList;

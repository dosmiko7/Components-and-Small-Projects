import { useNavigate } from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
	const navigate = useNavigate();
	function cancelHandler() {
		navigate("..");
	}

	// 14.6 Now we can use event value on inputs with default value attribute provided by React: defaultValue={}
	// 14.7 Now we will get an error because by default when we use loader data, it searches for the closest available loader data and the highest level at which it looks for data is the route definition of the route for which this component was loaded.
	// So in our case (look at App) the highest route is this with EditEventPage element, because there we are using our EventForm component.
	// 14.8 To change that we need add special index to our parent route (look at App.js)
	return (
		<form className={classes.form}>
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
				>
					Cancel
				</button>
				<button>Save</button>
			</div>
		</form>
	);
}

export default EventForm;

import { useFetcher } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";
import { useEffect } from "react";

const NewsletterSignup = () => {
	// 21. useFetcher let us trigger an action but it will not initialize a route transition.
	// So fetcher should be used when you wann trigger an action or also a loader without actually navigating to the page to which the action/loader belongs
	// 21.1 We need add action atribute and change form to fetcher.Form
	// 21.2 Fetcher also provides bunch of properties that help understand whether your action or loader is successed
	// 22. In EventsPage.js
	const fetcher = useFetcher();
	const { data, state } = fetcher;

	useEffect(() => {
		if (state === "idle" && data && data.message) {
			window.alert(data.message);
		}
	}, [data, state]);

	return (
		<fetcher.Form
			method="post"
			action="/newsletter"
			className={classes.newsletter}
		>
			<input
				type="email"
				placeholder="Sign up for newsletter..."
				aria-label="Sign up for newsletter"
			/>
			<button>Sign up</button>
		</fetcher.Form>
	);
};

export default NewsletterSignup;

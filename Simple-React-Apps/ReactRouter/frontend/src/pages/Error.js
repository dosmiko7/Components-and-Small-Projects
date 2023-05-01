// 9.5 useRouteError gives us error object
import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
	// 9.7. The shape of that object depends on whether you threw a response or any other kind of data
	const error = useRouteError();

	// 9.8 Default values for errors
	let title = "An error occured";
	let message = "Something went wrong!";

	// 9.85 Error-based message definition
	// 10. In EventsPage.js
	if (error.status === 500) {
		// // 10.5 Before json() in EventsPage.js
		// // JSON.parse changes JSON file into JS object
		// message = JSON.parse(error.data).message;
		// 10.5 After:
		// 11. In EventsList.js
		message = error.data.message;
	}

	if (error.status === 404) {
		title = "Not found";
		message = "Could not find resource or page";
	}

	return (
		<>
			<MainNavigation />
			<PageContent title={title}>{message}</PageContent>;
		</>
	);
};

export default ErrorPage;

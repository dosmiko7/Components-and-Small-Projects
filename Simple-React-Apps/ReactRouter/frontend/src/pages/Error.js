// 9.5 useRouteError gives us error object
import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";

const ErrorPage = () => {
	// 9.7. The shape of that object depends on whether you threw a response or any other kind of data
	const error = useRouteError();

	// 9.8 Default values for errors
	let title = "An error occured";
	let message = "Something went wrong!";

	// 9.85 Error-based message definition
	if (error.status === 500) {
		message = JSON.parse(error.data).message;
	}

	if (error.status === 404) {
		title = "Not found";
		message = "Could not find resource or page";
	}

	return <PageContent title={title}>{message}</PageContent>;
};

export default ErrorPage;

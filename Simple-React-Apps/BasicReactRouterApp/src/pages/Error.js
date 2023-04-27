// 12. In this file, we'll make a custom error subpage

import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
	return (
		<>
			<MainNavigation />;
			<main>
				<h1>An error ccurred!</h1>
				<p>Could not find this page!</p>
			</main>
		</>
	);
};

export default ErrorPage;

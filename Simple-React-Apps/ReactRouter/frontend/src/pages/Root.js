// 5. useNavigation lets us find out whether we're currently in active transition, if we're loading data or not.
import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
	const navigation = useNavigation();
	// 5.5 With that we can implement loading element which is shown only when we're in loading state
	// 6. in EventsPage.js
	return (
		<>
			<MainNavigation />
			<main>
				{navigation.state === "loading" ? <p>Loading...</p> : ""}
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;

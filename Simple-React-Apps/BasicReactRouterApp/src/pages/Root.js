// 10. We need import Outlet. This compoment marks the place where the child route elements should be render
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

import classes from "./Root.module.css";

// 11. After this we can render MainNavigation component. It will be rendered before our components
const RootLayout = () => {
	return (
		<>
			<MainNavigation />
			<main className={classes.content}>
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;

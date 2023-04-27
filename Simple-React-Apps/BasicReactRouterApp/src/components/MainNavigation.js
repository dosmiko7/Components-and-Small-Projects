import { Link, NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

// 14. Adding highlight to subpage link which is already active. First we need add css styles for a.active, then import NavLink component. NavLink takes className as a function. That function should return the class name that should be added to anchot tag. 'isActive' is a boolean which is true, when link is currently active

// 15. We need also add "end" proprty to NavLink. "end" property says "If path is ended with value of property "to" then add style"

// 16. in Home.js

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) => (isActive ? classes.active : undefined)}
							end
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/products"
							className={({ isActive }) => (isActive ? classes.active : undefined)}
						>
							Products
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;

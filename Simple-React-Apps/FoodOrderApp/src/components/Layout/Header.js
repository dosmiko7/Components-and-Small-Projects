import React from "react";

import HeaderCartButton from "./HeaderCartButton";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = () => {
	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton />
			</header>
			<div>
				<img
					className={classes["main-image"]}
					src={mealsImage}
					alt="Table with food"
				/>
			</div>
		</React.Fragment>
	);
};

export default Header;

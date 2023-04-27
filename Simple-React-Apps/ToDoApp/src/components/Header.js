import React from "react";

import classes from "./Header.module.css";

const Header = () => {
	return (
		<div>
			<h1 className={classes.title}>ToDo List</h1>
		</div>
	);
};

export default Header;

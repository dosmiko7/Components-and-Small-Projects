import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth-context";

function App() {
	// Logic moved to auth-context to have a cleaner App Component. It is not necessary
	const ctx = useContext(AuthContext);

	return (
		<React.Fragment>
			<MainHeader />
			<main>
				{!ctx.isLoggedIn && <Login />}
				{ctx.isLoggedIn && <Home />}
			</main>
		</React.Fragment>
	);
}

export default App;

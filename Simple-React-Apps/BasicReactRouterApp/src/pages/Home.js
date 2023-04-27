// 6. We shouldnt change page via href="/products". It's causing http request. We wanna avoid it

// 7. We want to React Router make a job for us with changing the subpage. We need import Link from React Router

// 16. We can also add other way to provide navigation. For example if we want change subpage after some kind of counter or after form subbmited. We need trigger navigation from inside of code. To do that, we need import useNavigate

import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
	const navigate = useNavigate();

	// 17. We're adding button and handler which will move user to another subpage. It is only example. Normally we should add Link to button

	// 18. in Products.js
	const navigateHandler = () => {
		navigate("/products");
	};

	return (
		<>
			<h1>My Home Page</h1>
			<p>
				Go to <Link to="/products">the list of products.</Link>
			</p>
			<p>
				<button onClick={navigateHandler}>Navigate</button>
			</p>
		</>
	);
};

export default HomePage;

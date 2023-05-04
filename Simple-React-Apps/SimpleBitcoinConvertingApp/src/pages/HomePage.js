import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
	const navigate = useNavigate();

	const navigateHandler = () => {
		navigate("/converting");
	};

	return (
		<>
			<h1>Bitcoin exchange for the most popular currencies</h1>
			<p>
				Go to <Link to="/converting">exchange subpage.</Link>
			</p>
			<p>
				<button onClick={navigateHandler}>Navigate</button>
			</p>
		</>
	);
};

export default HomePage;

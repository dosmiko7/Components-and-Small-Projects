import { useEffect } from "react";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	useEffect(() => {
		fetch(`http://localhost:8000/questions`)
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((err) => console.error("Error"));
	});

	return (
		<div className="app">
			<Header />
			<Main></Main>
		</div>
	);
}

export default App;

import { useEffect, useReducer } from "react";

// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import ErrorStatement from "./components/ErrorStatement";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";

// Types
import { Status, IState, IAction } from "./common/types";

const inititalState = {
	questions: [],
	status: Status.Loading,
	index: 0,
};

const reducer = (state: IState, action: IAction): IState => {
	switch (action.type) {
		case "dataReceived":
			return { ...state, questions: action.payload, status: Status.Ready };
		case "dataFailed":
			return { ...state, status: Status.Error };
		case "start":
			return { ...state, status: Status.Active };
		default:
			throw new Error("Wrong action type.");
	}
};

function App() {
	const [{ questions, status, index }, dispatch]: [IState, React.Dispatch<IAction>] = useReducer(
		reducer,
		inititalState
	);

	const numQuestions = questions?.length ?? 0;

	useEffect(() => {
		fetch(`http://localhost:8000/questions`)
			.then((response) => response.json())
			.then((data) => dispatch({ type: `dataReceived`, payload: data }))
			.catch((err) => dispatch({ type: "dataFailed" }));
	});

	return (
		<div className="app">
			<Header />
			<Main>
				{status === Status.Loading && <Loader />}
				{status === Status.Error && <ErrorStatement />}
				{status === Status.Ready && (
					<StartScreen
						numQuestions={numQuestions}
						dispatch={dispatch}
					/>
				)}
				{status === Status.Active && questions && <Question question={questions[index]} />}
			</Main>
		</div>
	);
}

export default App;

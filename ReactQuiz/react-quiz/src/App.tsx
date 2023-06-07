import { useEffect, useReducer } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import ErrorStatement from "./components/ErrorStatement";
import StartScreen from "./components/StartScreen";

enum Status {
	Loading,
	Error,
	Ready,
	Active,
	Finished,
}

interface IQuestion {
	question: string;
	options: string[];
	correctOption: number;
	points: number;
}

interface IState {
	questions?: IQuestion[];
	status: Status;
}

interface IAction {
	payload?: IQuestion[];
	type: string;
}

const inititalState = {
	questions: [],
	status: Status.Loading,
};

const reducer = (state: IState, action: IAction): IState => {
	switch (action.type) {
		case "dataReceived":
			return { ...state, questions: action.payload, status: Status.Ready };
		case "dataFailed":
			return { ...state, status: Status.Error };
		default:
			throw new Error("Wrong action type.");
	}
};

function App() {
	const [state, dispatch]: [IState, React.Dispatch<IAction>] = useReducer(reducer, inititalState);

	const numQuestions = state.questions?.length ?? 0;

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
				{state.status === Status.Loading && <Loader />}
				{state.status === Status.Error && <ErrorStatement />}
				{state.status === Status.Ready && <StartScreen numQuestions={numQuestions} />}
			</Main>
		</div>
	);
}

export default App;

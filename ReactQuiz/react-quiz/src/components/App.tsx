import { useEffect, useReducer } from "react";

// Components
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import ErrorStatement from "./ErrorStatement";
import StartScreen from "./StartScreen";
import Question from "./Question";

// Types
import { Status, IState, IAction } from "../common/types";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";

const inititalState = {
	questions: [],
	status: Status.Loading,
	index: 0,
	answer: null,
	points: 0,
};

const reducer = (state: IState, action: IAction): IState => {
	const question = state.questions[state.index];

	switch (action.type) {
		case "dataReceived":
			return { ...state, questions: action.payload ?? [], status: Status.Ready };
		case "dataFailed":
			return { ...state, status: Status.Error };
		case "start":
			return { ...state, status: Status.Active };
		case "newAnswer":
			return {
				...state,
				answer: action.answer ?? null,
				points: action.answer === question.correctOption ? (state.points += question.points) : state.points,
			};
		case "nextQuestion":
			return { ...state, index: state.index + 1, answer: null };
		case "finish":
			return { ...state, status: Status.Finished };

		default:
			throw new Error("Wrong action type.");
	}
};

function App() {
	const [{ questions, status, index, answer, points }, dispatch]: [IState, React.Dispatch<IAction>] = useReducer(
		reducer,
		inititalState
	);

	const numQuestions = questions?.length ?? 0;
	const maxPossiblePoints = questions.reduce((prev, curr) => prev + curr.points, 0);

	useEffect(() => {
		fetch(`http://localhost:8000/questions`)
			.then((response) => response.json())
			.then((data) => dispatch({ type: `dataReceived`, payload: data }))
			.catch(() => dispatch({ type: "dataFailed" }));
	}, []);

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
				{status === Status.Active && questions && (
					<>
						<Progress
							index={index}
							numQuestions={numQuestions}
							points={points}
							maxPossiblePoints={maxPossiblePoints}
							answer={answer}
						/>
						<Question
							question={questions[index]}
							dispatch={dispatch}
							answer={answer}
						/>
						<NextButton
							dispatch={dispatch}
							answer={answer}
							numQuestions={numQuestions}
							index={index}
						/>
					</>
				)}
				{status === Status.Finished && (
					<FinishScreen
						points={points}
						maxPossiblePoints={maxPossiblePoints}
					/>
				)}
			</Main>
		</div>
	);
}

export default App;

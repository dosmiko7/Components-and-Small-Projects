interface IStartScreenProps {
	numQuestions: number;
}

const StartScreen = (props: IStartScreenProps) => {
	const { numQuestions } = props;

	return (
		<div className="start">
			<h2>Welcome to The React Quiz!</h2>
			<p>{numQuestions} questions to mastery your knowledge about React</p>
			<button className="btn btn-ui">Let's start</button>
		</div>
	);
};

export default StartScreen;

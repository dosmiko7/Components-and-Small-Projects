import { IAction } from "../common/types";

interface INextButtonProps {
	dispatch: React.Dispatch<IAction>;
	answer: number | null;
}

const NextButton = (props: INextButtonProps) => {
	const { dispatch, answer } = props;

	if (answer === null) return null;
	return (
		<button
			className="btn btn-ui"
			onClick={() => dispatch({ type: "nextQuestion" })}
		>
			Next
		</button>
	);
};

export default NextButton;

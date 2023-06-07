import { IQuestion } from "../common/types";

interface IQuestionProps {
	question: IQuestion;
}

const OptionsList = (props: IQuestionProps) => {
	const { question } = props;

	return (
		<div className="options">
			{question.options.map((option) => (
				<button
					className="btn btn-option"
					key={option}
				>
					{option}
				</button>
			))}
		</div>
	);
};

export default OptionsList;

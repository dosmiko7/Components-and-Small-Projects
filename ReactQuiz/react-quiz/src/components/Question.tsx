import { IQuestion } from "../common/types";

interface IQuestionProps {
	question: IQuestion;
}

const Question = (props: IQuestionProps) => {
	const { question } = props;

	return (
		<div>
			<h4>{question.question}</h4>
			<div className="options">
				{question.options.map((option) => (
					<button
						className="btn btn-option"
						key={option}
					>
						option
					</button>
				))}
			</div>
		</div>
	);
};

export default Question;

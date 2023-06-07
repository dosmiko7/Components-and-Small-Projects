import { IQuestion } from "../common/types";
import OptionsList from "./OptionsList";

interface IQuestionProps {
	question: IQuestion;
}

const Question = (props: IQuestionProps) => {
	const { question } = props;

	return (
		<div>
			<h4>{question.question}</h4>
			<OptionsList question={question} />
		</div>
	);
};

export default Question;

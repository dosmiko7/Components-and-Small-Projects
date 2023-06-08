interface IFinishScreenProps {
	points: number;
	maxPossiblePoints: number;
	highscore: number;
}

const FinishScreen = (props: IFinishScreenProps) => {
	const { points, maxPossiblePoints, highscore } = props;

	const percentage = (points / maxPossiblePoints) * 100;

	let emoji;
	if (percentage === 100) emoji = "🥇";
	else if (percentage < 100 && percentage >= 75) emoji = "😍";
	else if (percentage < 75 && percentage >= 40) emoji = "🙄";
	else emoji = "🥺";
	return (
		<div>
			<p className="result">
				<span>{emoji}</span>You finished with <strong>{points}</strong> out of {maxPossiblePoints} (
				{Math.ceil(percentage)}%)
			</p>
			<p className="highscore">(Highscore: {highscore} points)</p>
		</div>
	);
};

export default FinishScreen;

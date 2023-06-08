interface IFinishScreenProps {
	points: number;
	maxPossiblePoints: number;
}

const FinishScreen = (props: IFinishScreenProps) => {
	const { points, maxPossiblePoints } = props;

	const percentage = (points / maxPossiblePoints) * 100;

	return (
		<div>
			<p className="result">
				You finished with <strong>{points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)})
			</p>
		</div>
	);
};

export default FinishScreen;

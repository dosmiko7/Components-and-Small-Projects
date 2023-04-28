import { useParams } from "react-router-dom";

const EventDetailPage = () => {
	const params = useParams();

	return (
		<>
			<h1>EventDetailPage for:</h1>
			<p>{params.eventId}</p>
		</>
	);
};

export default EventDetailPage;

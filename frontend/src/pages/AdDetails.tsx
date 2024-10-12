import { useParams } from "react-router-dom";

function AdDetails() {
	const { id } = useParams();
	return <p>Details of Ad #{id}</p>;
}

export default AdDetails;

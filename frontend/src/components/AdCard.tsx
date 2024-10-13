import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

type AdCardProps = {
	id: number;
	title: string;
	price: number;
	pictureUrl: string;
	location: string;
};

function AdCard({ id, title, price, pictureUrl, location }: AdCardProps) {
	return (
		<div className="ad-card-container">
			<div className="ad-card-content">
				<img
					className="ad-card-image"
					src={pictureUrl}
					alt={`Une représentation visuelle de ${title}`}
				/>
				<footer className="ad-card-footer">
					<div className="ad-card-title-price">
						<Link to={`/annonces/${id}`} className="ad-card-title">
							{title}
						</Link>
						<div className="ad-card-price">{price}&nbsp;€</div>
					</div>
					<div className="ad-card-location">
						<MapPin size={16} className="icon location-icon" />
						<span>{location}</span>
					</div>
				</footer>
			</div>
		</div>
	);
}

export default AdCard;

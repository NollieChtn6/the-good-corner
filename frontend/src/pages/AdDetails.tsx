import { useParams, useNavigate } from "react-router-dom";
import { DateTime } from "luxon";
import { store } from "../store/storeIndex";
import TagItem from "../components/TagItem";
import { ArrowLeft, Pencil, MapPin, Trash2 } from "lucide-react";

const AdDetails = () => {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const ad = store.adsStore((state) =>
		state.ads.find((ad) => ad.id === Number(id)),
	);
	if (!ad) {
		return <p>Annonce non trouvée</p>;
	}

	const formattedCreationDate = DateTime.fromISO(ad.createdAt).toLocaleString(
		DateTime.DATE_FULL,
	);

	return (
		<>
			<button
				className="button back-btn"
				onClick={() => navigate(-1)}
				type="button"
			>
				<ArrowLeft /> Retour
			</button>
			<div className="ad-details">
				<h1>{ad.title}</h1>
				<div className="ad-details-meta">
					<p>
						Annonce publiée par <strong>{ad.owner}</strong> dans{" "}
						<strong>{ad.category.name}</strong>
					</p>
					<p>
						<MapPin />
						{ad.location}
					</p>
				</div>
				<img className="ad-details-image" src={ad.pictureUrl} alt={ad.title} />
				<p>{ad.description}</p>
				<div className="tags-container">
					{ad.tags.map((tag) => (
						<TagItem key={tag.id} tag={tag} />
					))}
				</div>
				<p className="ad-details-price">{ad.price}&nbsp;€</p>
				Annonce ajoutée le&nbsp;: {formattedCreationDate}
				<div className="ad-details-actions">
					<button className="button" type="button">
						<Pencil size={16} className="icon edit-icon" />
						Modifier
					</button>
					<button className="button" type="button">
						<Trash2 size={16} className="icon delete-icon" />
						Supprimer
					</button>
				</div>
			</div>
		</>
	);
};

export default AdDetails;

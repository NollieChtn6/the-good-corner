type AdCardProps = {
	id: number;
	title: string;
	price: number;
	pictureUrl: string;
};

function AdCard({ id, title, price, pictureUrl }: AdCardProps) {
	return (
		<div className="ad-card-container">
			<a className="ad-card-link" href={`/ads/${id}`} id={`object_${id}`}>
				<img
					className="ad-card-image"
					src={pictureUrl}
					alt={`Une représentation visuelle de ${title}`}
				/>
				<div className="ad-card-text">
					<div className="ad-card-title">{title}</div>
					<div className="ad-card-price">{price}&nbsp;€</div>
				</div>
			</a>
		</div>
	);
}

export default AdCard;

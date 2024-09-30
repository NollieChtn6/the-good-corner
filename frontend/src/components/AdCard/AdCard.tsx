import "../../index.css";

type AdCardProps = {
	id: number;
	title: string;
	price: number;
	img: string;
	alt: string;
	link: string;
};

function AdCard({ id, title, price, img, alt, link }: AdCardProps) {
	return (
		<div className="ad-card-container">
			<a className="ad-card-link" href={link} id={`object_${id}`}>
				<img className="ad-card-image" src={img} alt={alt} />
				<div className="ad-card-text">
					<div className="ad-card-title">{title}</div>
					<div className="ad-card-price">{price}&nbsp;€</div>
				</div>
			</a>
		</div>
	);
}

export default AdCard;

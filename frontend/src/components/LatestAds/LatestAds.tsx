import AdCard from "../AdCard/AdCard";

import ads from "../../data/ads.json";

import "../../index.css";

function LatestAds() {
	return (
		<>
			<h2>Annonces récentes</h2>
			<section className="recent-ads">
				{ads.map((ad) => (
					<AdCard
						id={ad.id}
						title={ad.title}
						price={ad.price}
						img={ad.img}
						alt={ad.alt}
						link={ad.link}
						key={ad.id}
					/>
				))}
			</section>
		</>
	);
}

export default LatestAds;

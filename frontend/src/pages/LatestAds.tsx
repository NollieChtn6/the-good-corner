import { Link } from "react-router-dom";
import AdCard from "../components/AdCard";
import { store } from "../store/storeIndex";

function LatestAds() {
	const ads = store.adsStore((state) => state.ads);
	const latestAds = ads.slice(Math.max(ads.length - 9, 0));

	return (
		<>
			<h2>Annonces récentes</h2>
			<section className="recent-ads">
				{latestAds.map((ad) => (
					<div key={ad.title}>
						<AdCard
							id={ad.id}
							title={ad.title}
							price={ad.price}
							pictureUrl={ad.pictureUrl}
							key={ad.id}
							location={ad.location}
						/>
					</div>
				))}
			</section>
			<div className="view-more-container">
				<Link to="/annonces" className="button button-primary">
					Voir toutes les annonces
				</Link>
			</div>
		</>
	);
}

export default LatestAds;

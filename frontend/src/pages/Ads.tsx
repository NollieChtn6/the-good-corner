import AdCard from "../components/AdCard";
import { store } from "../store/storeIndex";

function AllAds() {
	const ads = store.adsStore((state) => state.ads);

	return (
		<div>
			<h2>Toutes les annonces</h2>
			<section className="recent-ads">
				{ads.map((ad) => (
					<AdCard
						key={ad.id}
						id={ad.id}
						title={ad.title}
						price={ad.price}
						pictureUrl={ad.pictureUrl}
						location={ad.location}
					/>
				))}
			</section>
		</div>
	);
}

export default AllAds;

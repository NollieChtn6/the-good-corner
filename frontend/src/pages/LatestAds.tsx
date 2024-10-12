import { useState } from "react";
import AdCard from "../components/AdCard";

import { store } from "../store/storeIndex";

function LatestAds() {
	const [cartTotal, setCartTotal] = useState<number>(0);
	const ads = store.adsStore((state) => state.ads);
	console.log(ads);

	const handleAddToCart = (price: number) => {
		setCartTotal(cartTotal + price);
	};

	const handleResetCart = () => {
		setCartTotal(0);
	};

	return (
		<>
			<h2>Annonces récentes</h2>
			<p>Total du panier&nbsp;: {cartTotal}&nbsp;€</p>
			<button
				type="button"
				key=""
				className=""
				onClick={() => handleResetCart()}
			>
				Vider le panier
			</button>
			<section className="recent-ads">
				{ads.map((ad) => (
					<div key={ad.title}>
						<AdCard
							id={ad.id}
							title={ad.title}
							price={ad.price}
							pictureUrl={ad.pictureUrl}
							key={ad.id}
						/>
						<button
							type="button"
							key=""
							className="button"
							onClick={() => handleAddToCart(ad.price)}
						>
							Ajouter au panier
						</button>
					</div>
				))}
			</section>
		</>
	);
}

export default LatestAds;

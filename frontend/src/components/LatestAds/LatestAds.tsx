import { useState } from "react";
import AdCard from "../AdCard/AdCard";

import ads from "../../data/ads.json";

import "../../index.css";

function LatestAds() {
	const [cartTotal, setCartTotal] = useState<number>(0);

	const handleAddToCart = (price: number) => {
		setCartTotal(cartTotal + price);
	};

	return (
		<>
			<h2>Annonces récentes</h2>
			<p>Total du panier&nbsp;: {cartTotal}&nbsp;€</p>

			<section className="recent-ads">
				{ads.map((ad) => (
					<div key={ad.title}>
						<AdCard
							id={ad.id}
							title={ad.title}
							price={ad.price}
							img={ad.img}
							alt={ad.alt}
							link={ad.link}
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

import axios from "axios";
import { useEffect, useState } from "react";
import AdCard from "../AdCard/AdCard";
import "../../index.css";

import type { Ad } from "../../@types/types";

function LatestAds() {
	const [cartTotal, setCartTotal] = useState<number>(0);
	const [ads, setAds] = useState<Ad[]>([]);

	const handleAddToCart = (price: number) => {
		setCartTotal(cartTotal + price);
	};

	const handleResetCart = () => {
		setCartTotal(0);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get<Ad[]>("http://localhost:3000/ads");
				console.log("Ads:", response.data);
				setAds(response.data);
			} catch (error) {
				console.log("Error:", error);
			}
		};
		fetchData();
	}, []);

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
							picture={ad.picture}
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

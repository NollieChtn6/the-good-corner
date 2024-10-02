import axios from "axios";
import { create } from "zustand";

import type { Ad } from "../@types/types";

type AdsStore = {
	ads: Ad[];
	fetchAds: () => Promise<void>;
};

export const useAdsStore = create<AdsStore>((set) => ({
	ads: [],
	fetchAds: async () => {
		try {
			const response = await axios.get("http://localhost:3000/ads");
			if (response.status === 200 && response.data) {
				set({ ads: response.data });
				console.log(response.data);
			} else {
				throw new Error("Failed to fetch ads");
			}
		} catch (error) {
			console.error(error);
		}
	},
}));

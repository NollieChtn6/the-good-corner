import { create } from "zustand";

import type { Ad, CreateAdFormData } from "../@types/types";

import { fetchAds, createAd } from "../services/adsServices";

type AdsStore = {
	ads: Ad[];
	fetchAds: () => Promise<void>;
	createAd: (newAd: CreateAdFormData) => Promise<void>;
};

export const useAdsStore = create<AdsStore>((set) => ({
	ads: [],
	fetchAds: async () => {
		try {
			const adsData = await fetchAds();
			set({ ads: adsData });
		} catch (error) {
			console.error(error);
		}
	},
	createAd: async (newAdData) => {
		try {
			const newAd = await createAd(newAdData);
			set((state) => ({ ads: [...state.ads, newAd] }));
		} catch (error) {
			console.error(error);
		}
	},
}));

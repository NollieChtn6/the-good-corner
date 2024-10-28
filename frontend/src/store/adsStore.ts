import { create } from "zustand";

import type { Ad, CreateAdFormData, UpdateAdFormData } from "../@types/types";

import { fetchAds, createAd, updateAd } from "../services/adsServices";

type AdsStore = {
	ads: Ad[];
	fetchAds: () => Promise<void>;
	createAd: (newAd: CreateAdFormData) => Promise<void>;
	updateAd: (adId: number, updatedAd: UpdateAdFormData) => Promise<void>;
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
	updateAd: async (adId, updatedData) => {
		try {
			const updatedAd = await updateAd(adId, updatedData);
			set((state) => ({
				ads: state.ads.map((ad) => (ad.id === adId ? updatedAd : ad)),
			}));
		} catch (error) {
			console.error("Error updating ad:", error);
		}
	},
}));

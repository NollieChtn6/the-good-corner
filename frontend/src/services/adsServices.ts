import type { Ad, AdFormData } from "../@types/types";

import axios from "axios";

const BASE_URL = "http://localhost:3000/api/ads";

export const fetchAds = async (): Promise<Ad[]> => {
	try {
		const response = await axios.get<Ad[]>(`${BASE_URL}`);
		return response.data;
	} catch (error) {
		console.error("Error fetching ads:", error);
		throw error;
	}
};

export const createAd = async (data: AdFormData): Promise<Ad> => {
	try {
		const response = await axios.post<Ad>(`${BASE_URL}/create`, data);
		return response.data;
	} catch (error) {
		console.error("Error creating ad:", error);
		throw error;
	}
};

export const updateAd = async (adId: number, data: AdFormData): Promise<Ad> => {
	try {
		const response = await axios.patch<Ad>(`${BASE_URL}/${adId}/update`, data);
		return response.data;
	} catch (error) {
		console.error("Error updating ad:", error);
		throw error;
	}
};

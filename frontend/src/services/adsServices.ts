import type { Ad, CreateAdFormData } from "../@types/types";

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

export const createAd = async (data: CreateAdFormData): Promise<Ad> => {
	try {
		const response = await axios.post<Ad>(`${BASE_URL}/create`, data);
		return response.data;
	} catch (error) {
		console.error("Error creating ad:", error);
		throw error;
	}
};
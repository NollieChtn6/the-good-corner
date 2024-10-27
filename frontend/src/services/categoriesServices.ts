import type { Category } from "../@types/types";

import axios from "axios";

const BASE_URL = "http://localhost:3000/api/categories";

export const fetchCategories = async (): Promise<Category[]> => {
	try {
		const response = await axios.get<Category[]>(`${BASE_URL}`);
		return response.data;
	} catch (error) {
		console.error("Error fetching categories:", error);
		throw error;
	}
};

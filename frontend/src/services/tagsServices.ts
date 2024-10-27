import type { Tag } from "../@types/types";

import axios from "axios";

const BASE_URL = "http://localhost:3000/api/tags";

export const fetchTags = async (): Promise<Tag[]> => {
	try {
		const response = await axios.get<Tag[]>(`${BASE_URL}`);
		return response.data;
	} catch (error) {
		console.error("Error fetching tags:", error);
		throw error;
	}
};

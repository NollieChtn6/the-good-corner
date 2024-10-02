import axios from "axios";
import { create } from "zustand";

import type { Category } from "../@types/types";

type CategoriesStore = {
	categories: Category[];
	fetchCategories: () => Promise<void>;
};

export const useCategoriesStore = create<CategoriesStore>((set) => ({
	categories: [],
	fetchCategories: async () => {
		try {
			const response = await axios.get("http://localhost:3000/categories");
			if (response.status === 200 && response.data) {
				set({ categories: response.data });
				console.log(response.data);
			} else {
				throw new Error("Failed to fetch categories");
			}
		} catch (error) {
			console.error(error);
		}
	},
}));

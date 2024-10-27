import { create } from "zustand";
import { fetchCategories } from "../services/categoriesServices";

import type { Category } from "../@types/types";

type CategoriesStore = {
	categories: Category[];
	fetchCategories: () => Promise<void>;
};

export const useCategoriesStore = create<CategoriesStore>((set) => ({
	categories: [],
	fetchCategories: async () => {
		try {
			const categoriesData = await fetchCategories();
			set({ categories: categoriesData });
		} catch (error) {
			console.error(error);
		}
	},
}));

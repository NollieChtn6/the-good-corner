import { create } from "zustand";
import { fetchTags } from "../services/tagsServices";

import type { Tag } from "../@types/types";

type TagsStore = {
	tags: Tag[];
	fetchTags: () => Promise<void>;
};

export const useTagsStore = create<TagsStore>((set) => ({
	tags: [],
	fetchTags: async () => {
		try {
			const tagsData = await fetchTags();
			set({ tags: tagsData });
		} catch (error) {
			console.error(error);
		}
	},
}));

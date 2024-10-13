import { useAdsStore } from "./adsStore";
import { useCategoriesStore } from "./categoriesStore";
import { useTagsStore } from "./tagsStore";

export const store = {
	adsStore: useAdsStore,
	categoriesStore: useCategoriesStore,
	tagsStore: useTagsStore,
};

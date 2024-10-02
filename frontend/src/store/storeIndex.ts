import { useAdsStore } from "./adsStore";
import { useCategoriesStore } from "./categoriesStore";

export const store = {
	adsStore: useAdsStore,
	categoriesStore: useCategoriesStore,
};

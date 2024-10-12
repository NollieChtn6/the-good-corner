import { AdEntity } from "../entities/Ad";
import { CategoryEntity } from "../entities/Category";

export const getAllCategories = async (): Promise<CategoryEntity[]> => {
	const categories = await CategoryEntity.find({});
	return categories;
};

export const getCategoryById = async (
	categoryId: number,
): Promise<CategoryEntity | null> => {
	const category = await CategoryEntity.findOne({
		where: { id: categoryId },
	});
	return category;
};

export const getAdsByCategory = async (
	categoryId: number,
): Promise<AdEntity[]> => {
	const ads = await AdEntity.find({
		relations: {
			category: true,
		},
		where: {
			category: { id: categoryId },
		},
	});
	return ads;
};

import { In } from "typeorm";

import { AdEntity } from "../entities/Ad";
import { CategoryEntity } from "../entities/Category";
import { TagEntity } from "../entities/Tag";

import type { NewAdData, UpdatedAdData } from "../schemas/adSchema";

export const getAllAds = async (): Promise<AdEntity[]> => {
	const ads = await AdEntity.find({
		relations: ["category", "tags"],
	});
	return ads;
};

export const getAdById = async (adId: number): Promise<AdEntity | null> => {
	const ad = await AdEntity.findOne({
		where: { id: adId },
		relations: ["category", "tags"],
	});
	return ad;
};

export const createAd = async (ad: NewAdData): Promise<AdEntity> => {
	const selectedCategory = await CategoryEntity.findOne({
		where: { id: ad.category },
	});
	if (!selectedCategory) {
		throw new Error("Category not found");
	}

	const newAd = new AdEntity();
	newAd.title = ad.title;
	newAd.description = ad.description;
	newAd.price = ad.price;
	newAd.owner = ad.owner;
	newAd.location = ad.location;
	newAd.pictureUrl = ad.pictureUrl;
	newAd.createdAt = new Date();
	newAd.category = selectedCategory;

	const selecTedTags = await TagEntity.find({
		where: {
			id: In(ad.tags || []),
		},
	});
	newAd.tags = selecTedTags;
	return await newAd.save();
};

export const deleteAd = async (adId: number): Promise<AdEntity | null> => {
	const selectedAd = await AdEntity.findOne({
		where: { id: adId },
	});
	if (!selectedAd) {
		throw new Error("Ad not found!");
	}
	return await selectedAd.remove();
};

export const updateAd = async (
	adId: number,
	data: UpdatedAdData,
): Promise<AdEntity | null> => {
	const selectedAd = await AdEntity.findOne({
		where: { id: adId },
		relations: ["tags", "category"],
	});
	if (!selectedAd) return null;

	selectedAd.title = data.title;
	selectedAd.description = data.description;
	selectedAd.price = data.price;
	selectedAd.pictureUrl = data.pictureUrl;
	selectedAd.updatedAt = new Date();

	if (data.category) {
		const selectedCategory = await CategoryEntity.findOne({
			where: { id: data.category },
		});
		if (!selectedCategory) {
			throw new Error("Category not found");
		}
		selectedAd.category = selectedCategory;
	}

	const selecTedTags = await TagEntity.find({
		where: {
			id: In(data.tags),
		},
	});
	selectedAd.tags = selecTedTags;

	return await AdEntity.save(selectedAd);
};

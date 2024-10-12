import type { Request, Response } from "express";
import * as categoryServices from "../services/categoryServices";

export const getAllCategories = async (req: Request, res: Response) => {
	const categories = await categoryServices.getAllCategories();
	res.json(categories);
};

export const getCategoryById = async (req: Request, res: Response) => {
	const categoryId = Number(req.params.id);
	const category = await categoryServices.getCategoryById(categoryId);
	if (!category) {
		return res.status(404).json({ message: "Categoy not found" });
	}
	res.json(category);
	return category;
};

export const getAdsByCategory = async (req: Request, res: Response) => {
	const categoryId = Number(req.params.id);
	const adsByCategory = await categoryServices.getAdsByCategory(categoryId);
	if (!adsByCategory) {
		return res.status(404).json({ message: "Ads not found in this category" });
	}
	res.json(adsByCategory);
	return adsByCategory;
};

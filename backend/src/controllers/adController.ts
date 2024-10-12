import type { Request, Response } from "express";
import * as adServices from "../services/adServices";
import * as adSchemas from "../schemas/adSchema";

export const getAllAds = async (req: Request, res: Response) => {
	const ads = await adServices.getAllAds();
	res.json(ads);
};

export const getAdById = async (req: Request, res: Response) => {
	const adId = Number(req.params.id);
	const ad = await adServices.getAdById(adId);
	if (!ad) {
		return res.status(404).json({ message: "Ad not found" });
	}
	res.json(ad);
	return ad;
};

export const createNewAd = async (req: Request, res: Response) => {
	const {
		title,
		description,
		location,
		price,
		owner,
		category,
		tags,
		pictureUrl,
	} = adSchemas.createAdSchema.parse(req.body);
	const newAd = await adServices.createAd({
		title,
		description,
		location,
		price,
		owner,
		category,
		tags,
		pictureUrl,
	});
	res.status(201).json({ message: "Ad has successfully been created:", newAd });
};

export const deleteAd = async (req: Request, res: Response) => {
	const adId = Number(req.params.id);
	const ad = await adServices.deleteAd(adId);
	if (!ad) {
		return res.status(404).json({ message: "Ad not found" });
	}
	res.status(200).send("Ad has successfully been deleted");
};

export const updateAd = async (req: Request, res: Response) => {
	const adId = Number(req.params.id);
	const { title, description, price, category, tags, pictureUrl } =
		adSchemas.updateAdSchema.parse(req.body);

	const updatedAd = await adServices.updateAd(adId, {
		title,
		description,
		price,
		category,
		tags,
		pictureUrl,
	});

	res
		.status(200)
		.json({ message: "Ad has successfully been updated", updatedAd });
};

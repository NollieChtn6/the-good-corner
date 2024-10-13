import type { Request, Response } from "express";
import * as tagServices from "../services/tagServices";

export const getAllTags = async (req: Request, res: Response) => {
	const tags = await tagServices.getAllTags();
	res.json(tags);
};

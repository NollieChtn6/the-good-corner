import { TagEntity } from "../entities/Tag";

export const getAllTags = async (): Promise<TagEntity[]> => {
	const ads = await TagEntity.find();
	return ads;
};

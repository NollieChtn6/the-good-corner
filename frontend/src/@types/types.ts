export type Ad = {
	id: number;
	title: string;
	description: string;
	owner: string;
	price: number;
	pictureUrl: string;
	category: Category;
	createdAt: Date;
	updatedAt: Date | null;
	tags: Tag[] | [];
};

export type Category = {
	id: number;
	name: string;
};

export type Tag = {
	id: number;
	label: string;
};

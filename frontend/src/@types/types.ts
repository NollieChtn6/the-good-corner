export type Ad = {
	id: number;
	title: string;
	description: string;
	owner: string;
	price: number;
	picture: string;
	category: Category;
};

export type Category = {
	id: number;
	name: string;
	ads: Ad[];
};

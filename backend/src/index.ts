import Express from "express";
import "reflect-metadata";
import { dataSource } from "./config/db";
import { Ad } from "./entities/Ad";
import { Category } from "./entities/Category";

const app = Express();
const PORT = 3000;

app.use(Express.json());

app.get("/", (req: Express.Request, res: Express.Response) => {
	res.send("Hello World!");
});

app.get("/ads", async (req: Express.Request, res: Express.Response) => {
	try {
		const adsList = await Ad.find();
		if (!adsList.length) {
			return res.status(404).send("Not found!");
		}
		res.send(adsList);
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
});

app.get("/categories", async (req: Express.Request, res: Express.Response) => {
	try {
		const categoriesList = await Ad.find();
		if (!categoriesList.length) {
			return res.status(404).send("Not found!");
		}
		res.json(categoriesList);
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
});

app.get("/ads/:id", async (req: Express.Request, res: Express.Response) => {
	const id = Number(req.params.id);
	try {
		const selectedAd = await Ad.findOneBy({ id });
		if (!selectedAd) return res.status(404).send("No ad found!");
		return res.json(selectedAd);
	} catch (err) {
		return res.status(500);
	}
});

app.get(
	"/categories/:id/ads",
	async (req: Express.Request, res: Express.Response) => {
		const categoryId = Number(req.params.id);
		let whereClause = {};
		if (categoryId)
			whereClause = {
				category: { id: categoryId },
			};
		try {
			const adsByCategory = await Ad.find({
				relations: {
					category: true,
				},
				where: whereClause,
			});
			if (!adsByCategory.length) {
				return res.status(404).send("Not found!");
			}
			return res.json(adsByCategory);
		} catch (err) {
			return res.status(500).send(err);
		}
	},
);

app.post("/ads/create", async (req: Express.Request, res: Express.Response) => {
	const {
		title,
		description,
		owner,
		price,
		picture,
		location,
		createdAt,
		categoryId,
	} = req.body;
	try {
		const newAd = new Ad();
		newAd.title = title;
		newAd.description = description;
		newAd.owner = owner;
		newAd.price = price;
		newAd.picture = picture;
		newAd.location = location;
		newAd.createdAt = createdAt;

		const category = Category.findOneBy({ id: categoryId });
		if (await category) {
			newAd.category = categoryId;
		}
		newAd.save();
		res.status(201).send(newAd);
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
});

app.delete(
	"/ads/:id/delete",
	async (req: Express.Request, res: Express.Response) => {
		const id = Number(req.params.id);
		try {
			const selectedAd = await Ad.findOneBy({ id });
			if (!selectedAd) return res.status(404).send("No ad found!");
			selectedAd.remove();
		} catch (err) {
			res.status(500).send(err);
		}
	},
);

app.listen(PORT, async () => {
	await dataSource.initialize();
	console.log(`App listening on: http://localhost:${PORT}`);
});

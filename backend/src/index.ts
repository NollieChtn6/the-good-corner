import Express from "express";
import "reflect-metadata";
import { dataSource } from "./config/db";
import { Ad } from "./entities/Ad";

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

app.post("/ads/create", (req: Express.Request, res: Express.Response) => {
	const { title, description, owner, price, picture, location, createdAt } =
		req.body;
	try {
		const newAd = new Ad();
		newAd.title = title;
		newAd.description = description;
		newAd.owner = owner;
		newAd.price = price;
		newAd.picture = picture;
		newAd.location = location;
		newAd.createdAt = createdAt;

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

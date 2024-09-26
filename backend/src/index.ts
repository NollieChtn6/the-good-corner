import Express from "express";
import sqlite3 from "sqlite3";
import "reflect-metadata";
import { dataSource } from "./config/db";

const app = Express();
const PORT = 3000;

const db = new sqlite3.Database("db.sqlite");

app.use(Express.json());

type Ad = {
	id: number;
	title: string;
	description: string;
	owner: string;
	price: number;
	picture: string;
	location: string;
	createdAt: string;
};

app.get("/", (req: Express.Request, res: Express.Response) => {
	res.send("Hello World!");
});

app.get("/ads", (req: Express.Request, res: Express.Response) => {
	db.all("SELECT * FROM ads", (err, rows) => {
		if (err) {
			console.log(err);
			return res.status(500).send(err);
		}
		return res.json(rows);
	});
});

app.get("/ads/:id", (req: Express.Request, res: Express.Response) => {
	const adId = Number(req.params.id);
	db.all("SELECT * FROM ads WHERE id = ?", adId, (err, rows) => {
		if (err) {
			console.log(err);
			return res.status(500).send(err);
		}
		if (!rows) {
			return res.status(404).send(err);
		}
		return res.json(rows);
	});
});

app.post("/ads/create", (req: Express.Request, res: Express.Response) => {
	const { title, description, owner, price, picture, location, createdAt } =
		req.body as Ad;

	const newAd: Omit<Ad, "id"> = {
		title,
		description,
		owner,
		price,
		picture,
		location,
		createdAt,
	};

	db.run(
		// sql
		"INSERT INTO ads ('title', 'description', 'owner', 'price', 'picture', 'location', 'createdAt') VALUES (?, ?, ?, ?, ?, ?, ?)",
		// parameter
		[
			req.body.title,
			req.body.description,
			req.body.owner,
			req.body.price,
			req.body.picture,
			req.body.location,
			req.body.createdAt,
		],
		// callback
		(err) => {
			if (err) {
				console.log(err);
				return res.status(500).send(err);
			}
			console.log(err);
			res.send("Request received, check the backend terminal");
		},
	);
});

app.delete("/ads/:id/delete", (req: Express.Request, res: Express.Response) => {
	const adId = Number(req.params.id);
	db.run("DELETE FROM ads WHERE id = ?", adId, (err) => {
		if (err) {
			console.log(err);
			return res.status(500).send(err);
		}
		return res.status(204).send();
	});
});

app.listen(PORT, async () => {
	await dataSource.initialize();
	console.log(`App listening on: http://localhost:${PORT}`);
});

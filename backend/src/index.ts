import Express from "express";
import sqlite3 from "sqlite3";

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

const ads: Ad[] = [
	{
		id: 1,
		title: "Bike to sell",
		description:
			"My bike is blue, working fine. I'm selling it because I've got a new one",
		owner: "bike.seller@gmail.com",
		price: 100,
		picture:
			"https://images.lecho.be/view?iid=dc:113129565&context=ONLINE&ratio=16/9&width=640&u=1508242455000",
		location: "Paris",
		createdAt: "2023-09-05T10:13:14.755Z",
	},
	{
		id: 2,
		title: "Car to sell",
		description:
			"My car is blue, working fine. I'm selling it because I've got a new one",
		owner: "car.seller@gmail.com",
		price: 10000,
		picture:
			"https://www.automobile-magazine.fr/asset/cms/34973/config/28294/apres-plusieurs-prototypes-la-bollore-bluecar-a-fini-par-devoiler-sa-version-definitive.jpg",
		location: "Paris",
		createdAt: "2023-10-05T10:14:15.922Z",
	},
];

app.get("/", (req: Express.Request, res: Express.Response) => {
	res.send("Hello World!");
});

app.get("/ads", (req: Express.Request, res: Express.Response) => {
	res.json(ads);
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

app.listen(PORT, () => {
	console.log(`App listening on: http://localhost:${PORT}`);
});

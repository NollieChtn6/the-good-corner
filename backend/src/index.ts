import Express from "express";

const app = Express();
const PORT = 3000;

app.get("/", (req: Express.Request, res: Express.Response) => {
	res.send("Hello World!");
});

app.listen(PORT, () => {
	console.log(`App listening on: http://localhost:${PORT}`);
});

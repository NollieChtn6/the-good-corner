import Express from "express";
import "reflect-metadata";
import { catchValidationErrors } from "./middlewares/errorHandlerMiddleware";
import { dataSource } from "./config/db";
import { router } from "./routes/router";

import cors from "cors";

const app = Express();
const PORT = 3000;

app.use(cors());
app.use(Express.json());
app.use(catchValidationErrors);
app.use("/api", router);

app.listen(PORT, async () => {
	await dataSource.initialize();
	console.log(`App listening on: http://localhost:${PORT}`);
});

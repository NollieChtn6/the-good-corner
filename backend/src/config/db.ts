import { DataSource } from "typeorm";
import { Ad } from "../entities/Ad";
import { Category } from "../entities/Category";

export const dataSource = new DataSource({
	type: "sqlite",
	database: "./the-good-corner.sqlite",
	entities: [Ad, Category],
	synchronize: false,
	migrations: ["./src/migrations/*.ts"],
	migrationsTableName: "migrations",
});

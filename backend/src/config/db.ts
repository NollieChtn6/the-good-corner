import { DataSource } from "typeorm";
import { AdEntity } from "../entities/Ad";
import { CategoryEntity } from "../entities/Category";
import { TagEntity } from "../entities/Tag";

export const dataSource = new DataSource({
	type: "sqlite",
	database: "./the-good-corner.sqlite",
	entities: [AdEntity, CategoryEntity, TagEntity],
	synchronize: true,
	// migrations: ["./src/migrations/*.ts"],
	// migrationsTableName: "migrations",
});

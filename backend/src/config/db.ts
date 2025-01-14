import { DataSource } from "typeorm";
import { AdEntity } from "../entities/Ad";
import { CategoryEntity } from "../entities/Category";
import { TagEntity } from "../entities/Tag";
import { UserEntity } from "../entities/User";
import { config } from "dotenv";

config();
const { DB_HOST, DB_PASSWORD, DB_USER, DB_NAME } = process.env;

const dataSource = new DataSource({
	type: "postgres",
	host: DB_HOST,
	username: DB_USER,
	password: DB_PASSWORD,
	database: DB_NAME,
	port: 5432,
	entities: [AdEntity, CategoryEntity, TagEntity, UserEntity],
	synchronize: true,
});

export const initializeDataSource = async () => {
	dataSource
		.initialize()
		.then(() => {
			console.log("Data Source has been initialized successfully");
		})
		.catch((error) => {
			console.log("Error during Data Source initialization", error);
		});
};

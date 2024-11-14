import { DataSource } from "typeorm";
import { AdEntity } from "../entities/Ad";
import { CategoryEntity } from "../entities/Category";
import { TagEntity } from "../entities/Tag";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./the-good-corner.sqlite",
  entities: [AdEntity, CategoryEntity, TagEntity],
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

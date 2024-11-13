import "reflect-metadata";
import { dataSource } from "./config/db";

await dataSource.initialize();

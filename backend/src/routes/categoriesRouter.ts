export const categoriesRouter = require("express").Router();
import * as categoriesController from "../controllers/categoryController";

categoriesRouter.get("/categories", categoriesController.getAllCategories);
categoriesRouter.get("/categories/:id", categoriesController.getCategoryById);
categoriesRouter.get(
	"/categories/:id/ads",
	categoriesController.getAdsByCategory,
);

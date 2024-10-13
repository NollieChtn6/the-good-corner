export const tagsRouter = require("express").Router();
import * as tagsController from "../controllers/tagController";

tagsRouter.get("/tags", tagsController.getAllTags);

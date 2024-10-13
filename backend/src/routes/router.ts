export const router = require("express").Router();

import { adsRouter } from "./adsRouter";
import { categoriesRouter } from "./categoriesRouter";
import { tagsRouter } from "./tagsRouter";

router.use(adsRouter);
router.use(categoriesRouter);
router.use(tagsRouter);

export const router = require("express").Router();

import { adsRouter } from "./adsRouter";
import { categoriesRouter } from "./categoriesRouter";

router.use(adsRouter);
router.use(categoriesRouter);

export const adsRouter = require("express").Router();
import * as adsController from "../controllers/adController";

adsRouter.get("/ads", adsController.getAllAds);
adsRouter.get("/ads/:id", adsController.getAdById);
adsRouter.post("/ads/create", adsController.createNewAd);
adsRouter.patch("/ads/:id/update", adsController.updateAd);
adsRouter.delete("/ads/:id/delete", adsController.deleteAd);

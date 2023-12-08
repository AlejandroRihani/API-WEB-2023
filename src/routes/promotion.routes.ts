import express from "express";
import { PromotionController } from "../controller/promotion.controller"
import { PromotionRepository } from "../controller/promotion.repository";
const router = express.Router();
const controller = new PromotionController(
    new PromotionRepository()
);
router.get("/promotions",controller.list.bind(controller));
router.get("/promotions/:promoId",controller.get.bind(controller));
router.post("/promotions",controller.create.bind(controller));
router.put("/promotions/:promoId",controller.update.bind(controller));
router.delete("/promotions/:promoId",controller.remove.bind(controller));
export default router;
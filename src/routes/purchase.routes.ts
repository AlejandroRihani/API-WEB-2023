import express from "express";
import { PurchaseController} from "../controller/purchase.controller"
import { PurchaseRepository } from "../controller/purchase.repository";
const router = express.Router();
const controller = new PurchaseController(
    new PurchaseRepository()
);
router.get("/purchase",controller.list.bind(controller));
router.get("/purchase/:purchaseId",controller.get.bind(controller));
router.post("/purchase",controller.create.bind(controller));
export default router;
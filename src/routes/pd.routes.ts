import express from "express";
import { PDController} from "../controller/pd.controller"
import { PDRepository } from "../controller/pd.repository";
const router = express.Router();
const controller = new PDController(
    new PDRepository()
);
router.get("/purchase_details",controller.list.bind(controller));
router.get("/purchase_details/:pdId",controller.get.bind(controller));
router.post("/purchase_details",controller.create.bind(controller));
router.put("/purchase_details/:pdId",controller.update.bind(controller));
router.delete("/purchase_details/:pdId",controller.remove.bind(controller));
export default router;
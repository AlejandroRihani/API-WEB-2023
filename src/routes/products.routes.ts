import express from "express";
import { ProductoController} from "../controller/products.controller"
import { ProductRepository } from "../controller/products.repository";
const router = express.Router();
const controller = new ProductoController(
    new ProductRepository()
);
router.get("/products",controller.list.bind(controller));
router.get("/products/:productId",controller.get.bind(controller));
router.post("/products",controller.create.bind(controller));
router.put("/products/:productId",controller.update.bind(controller));
router.delete("/products/:productId",controller.remove.bind(controller));
export default router;
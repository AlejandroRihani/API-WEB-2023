import express from "express";
import {UsuarioController} from "../controller/user.controller"
import { UserRepository } from "../controller/user.repository";
const router = express.Router();
const controller = new UsuarioController(
    new UserRepository()
);
router.get("/users",controller.list.bind(controller));
router.get("/users/:userId",controller.get.bind(controller));
router.post("/users",controller.create.bind(controller));
router.put("/users/:userId",controller.update.bind(controller));
router.delete("/users/:userId",controller.remove.bind(controller));
export default router;
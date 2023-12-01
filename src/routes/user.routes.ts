import express from "express";
import {UsuarioController} from "../controller/user.controller"

const router = express.Router();
const controller = new UsuarioController;
router.get("/users",controller.list);
router.get("/users/:userId",controller.get);
router.post("/users",controller.create);
router.put("users/userId",controller.update);
router.delete("/users/:userId",controller.remove);
export default router;
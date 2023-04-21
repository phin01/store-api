import express from "express";
import ClientController from "../controllers/client.controller.js"

const router = express.Router();

router.post("/", ClientController.createClient);
router.get("/", ClientController.getClients);
router.get("/:id", ClientController.getClient);

export default router;
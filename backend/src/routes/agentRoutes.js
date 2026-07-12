import express from "express";

import {
  getAgents,
  createAgent,
    removeAgent,
} from "../controllers/agentController.js";

const router = express.Router();

router.get("/", getAgents);

router.post("/", createAgent);
router.delete(
  "/:id",
  removeAgent
);

export default router;
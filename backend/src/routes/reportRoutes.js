import express from "express";

import {
  pipelineReport,
  lastWeekReport,
  closedByAgentReport,
} from "../controllers/reportController.js";

const router = express.Router();

/*
----------------------------------------
Reports
----------------------------------------
*/

router.get(
  "/pipeline",
  pipelineReport
);

router.get(
  "/last-week",
  lastWeekReport
);

router.get(
  "/closed-by-agent",
  closedByAgentReport
);

export default router;
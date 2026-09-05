import express from "express";
import cors from "cors";
import morgan from "morgan";


import authRoutes from "./routes/authRoutes.js";

import authMiddleware from "./middleware/authMiddleware.js";

import agentRoutes from "./routes/agentRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";


const app = express();

/*
----------------------------
Middlewares
----------------------------
*/

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));


// Authentication Routes
app.use("/api/auth", authRoutes);

 
// CRM Routes

app.use("/api/agents",  authMiddleware, agentRoutes);
app.use("/api/leads",   authMiddleware,leadRoutes);


app.use(
  "/api/leads",  authMiddleware,
  commentRoutes
);

// Register it:
app.use(
  "/api/report",  authMiddleware,
  reportRoutes
);

/*
----------------------------
Health Route
----------------------------
*/




app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Anvaya CRM API Running",
  });
});



export default app;
import express from "express";
import cors from "cors";
import morgan from "morgan";
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



app.use(
  "/api/agents",
  agentRoutes
);

// Register it:

app.use("/api/leads", leadRoutes);


app.use("/api/agents", agentRoutes);
app.use("/api/leads", leadRoutes);


app.use(
  "/api/leads",
  commentRoutes
);

// Register it:
app.use(
  "/api/report",
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
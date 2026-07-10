 import dotenv from "dotenv";

import connectDB from "../config/db.js";

import Agent from "../models/Agent.js";
import Lead from "../models/Lead.js";
import Comment from "../models/Comment.js";

import agentsData from "./data/agents.js";
import getLeads from "./data/leads.js";
import getComments from "./data/comments.js";

dotenv.config();

const seedDatabase = async () => {
  try {
    await connectDB();

    await Comment.deleteMany();

    await Lead.deleteMany();

    await Agent.deleteMany();

    console.log("Old data removed.");

    /*
    -------------------------
    Agents
    -------------------------
    */

    const agents = await Agent.insertMany(
      agentsData
    );

    console.log("Agents seeded.");

    /*
    -------------------------
    Leads
    -------------------------
    */

    const leads = await Lead.insertMany(
      getLeads(agents)
    );

    console.log("Leads seeded.");

    /*
    -------------------------
    Comments
    -------------------------
    */

    await Comment.insertMany(
      getComments(leads, agents)
    );

    console.log("Comments seeded.");

    console.log(
      "Database Seeded Successfully."
    );

    process.exit();
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

seedDatabase();
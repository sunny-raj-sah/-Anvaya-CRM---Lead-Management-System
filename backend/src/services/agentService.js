import Agent from "../models/Agent.js";

export const getAllAgents = async () => {
  return await Agent.find();
};

export const createNewAgent = async (
  agentData
) => {
  return await Agent.create(agentData);
};
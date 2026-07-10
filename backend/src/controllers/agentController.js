 import {
  getAllAgents,
  createNewAgent,
} from "../services/agentService.js";


/*

------------------------------------

Get All Agents

------------------------------------

*/
export const getAgents = async (
  req,
  res
) => {
  try {
    const agents =
      await getAllAgents();

    res.status(200).json(agents);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createAgent = async (
  req,
  res
) => {
  try {
    const agent =
      await createNewAgent(req.body);

    res.status(201).json(agent);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
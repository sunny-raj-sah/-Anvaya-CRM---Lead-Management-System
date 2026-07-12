 import {
  getAllAgents,
  createNewAgent,
   deleteAgent,
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

/*
----------------------------------------
DELETE /api/agents/:id
----------------------------------------
*/

export const removeAgent = async (req, res) => {
  try {
    const agent = await deleteAgent(req.params.id);

    if (!agent) {
      return res.status(404).json({
        message: "Agent not found",
      });
    }

    res.status(200).json({
      message: "Agent deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};